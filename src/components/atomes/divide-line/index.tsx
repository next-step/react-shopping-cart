export interface IDivideLine {
  className?: string;
}

export default function DivideLine({ className = '' }: IDivideLine) {
  return (
    <hr className={`divide-line-gray ${className}`}/>
  );
}
