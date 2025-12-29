import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const OPTIONS = [
  'Very helpful',
  'Helpful',
  'Okay',
  'Confusing',
  'Not useful',
];

interface BlogFeedbackProps {
  slug: string;
}

export const BlogFeedback = ({ slug }: BlogFeedbackProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!selected && !comment.trim()) return;

    try {
      setStatus('sending');

      // Cast to any because the generated Supabase types currently
      // don't include the `blog_feedback` table, but it exists in the DB.
      const { error } = await (supabase as any).from('blog_feedback').insert({
        blog_slug: slug,
        rating: selected,
        comment,
        path: window.location.pathname,
      });

      if (error) throw error;

      setStatus('sent');
      setComment('');
      setSelected(null);
    } catch (e) {
      console.error('Error saving feedback', e);
      setStatus('error');
    }
  };

  return (
    <section className="mt-10 rounded-xl border bg-card p-4 md:p-6">
      <h3 className="text-sm font-semibold text-muted-foreground">
        What did you think of this blog?
      </h3>

      <div className="mt-3 flex flex-wrap gap-2">
        {OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() =>
              setSelected((current) => (current === option ? null : option))
            }
          >
            <Badge
              variant={selected === option ? 'default' : 'outline'}
              className="cursor-pointer"
            >
              {option}
            </Badge>
          </button>
        ))}
      </div>

      <div className="mt-4">
        <label className="block text-xs font-medium text-muted-foreground mb-1">
          Want to share a quick thought? (share with your name anonymously)
        </label>
        <textarea
          className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          rows={3}
          placeholder="Write a short opinion or suggestion..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <div className="mt-3 flex items-center gap-3">
        <Button
          type="button"
          size="sm"
          onClick={handleSubmit}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending...' : 'Submit feedback'}
        </Button>

        {status === 'sent' && (
          <p className="text-xs text-emerald-500">Thanks for your feedback!</p>
        )}
        {status === 'error' && (
          <p className="text-xs text-destructive">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};
