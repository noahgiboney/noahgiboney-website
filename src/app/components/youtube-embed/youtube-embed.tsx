import styles from './youtube-embed.module.css';

interface YoutubeEmbedProps {
  embedId: string;
}

export default function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
    <div className={styles.embedContainer}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube video"
      />
    </div>
  );
}
