interface FeatureHighlightCardProps {
  title: string;
  description: string;
}

const FeatureHighlightCard = ({
  title,
  description,
}: FeatureHighlightCardProps) => {
  return (
    <div className="relative bg-white border border-border rounded-tr-xl p-3 pl-8">
      <span className="absolute left-0 top-0 h-full w-2.5 bg-yellow-400 " />

      <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureHighlightCard;
