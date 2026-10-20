import { profile } from "../../data/profile";

const AvailabilityBadge = ({ className = "" }) =>
  profile.available ? (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-pill
                  bg-green-900/20 border border-green-500/25 text-green-400
                  text-xs font-medium ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
      {profile.availabilityLabel}
    </div>
  ) : null;

export default AvailabilityBadge;
