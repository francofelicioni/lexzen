import { Badge } from "./badge"

type StatusBadgeProps = {
  status: "pending" | "accepted" | "rejected"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const classes = {
    pending: "bg-yellow-50 text-yellow-700",
    accepted: "bg-green-50 text-green-700",
    rejected: "bg-red-50 text-red-700",
  }

  return (
    <Badge variant="outline" className={classes[status]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}
