import React from "react";

type ProductMotifProps = {
  type: "chilli" | "sambar" | "podi" | "ragi" | "puttu";
  className?: string;
};

export const ProductMotif: React.FC<ProductMotifProps> = ({ type, className = "w-24 h-24" }) => {
  switch (type) {
    case "chilli":
      return (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          {/* Subtle decorative background circle */}
          <circle cx="50" cy="50" r="42" fill="#FAF0EC" stroke="#F4DDD6" strokeWidth="1.5" />
          {/* Chilli stem */}
          <path
            d="M50 20C50 16 54 13 58 12C57 16 55 18 52 22"
            stroke="#496335"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M45 22C48 20 54 20 57 23C54 25 48 25 45 22Z"
            fill="#3B512A"
          />
          {/* Red Chilli Body */}
          <path
            d="M48 23C62 27 68 46 62 62C58 72 48 83 38 88C40 78 40 68 42 58C44 46 42 35 48 23Z"
            fill="#B24C33"
          />
          <path
            d="M49 26C58 31 62 48 56 61C52 70 45 78 39 84C40 76 41 68 43 59C45 48 44 37 49 26Z"
            fill="#983C25"
          />
          {/* Light highlight reflection */}
          <path
            d="M56 36C59 42 58 50 54 58"
            stroke="#F4DDD6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />
          {/* Tiny spice flecks */}
          <circle cx="68" cy="38" r="2" fill="#C89539" />
          <circle cx="32" cy="62" r="2.5" fill="#C89539" />
          <circle cx="36" cy="34" r="1.5" fill="#983C25" />
        </svg>
      );

    case "sambar":
      return (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="42" fill="#FAF4EB" stroke="#EBDDC7" strokeWidth="1.5" />
          {/* Mortar / Spice Bowl */}
          <ellipse cx="50" cy="62" rx="26" ry="14" fill="#C07D2B" />
          <path
            d="M24 62C24 74 36 82 50 82C64 82 76 74 76 62"
            fill="#94631D"
          />
          {/* Spice mound in bowl */}
          <path
            d="M28 62C32 48 45 42 50 42C56 42 68 48 72 62Z"
            fill="#D68F38"
          />
          {/* Coriander & Cumin Seeds Motif */}
          <ellipse cx="50" cy="32" rx="4" ry="7" transform="rotate(25 50 32)" fill="#8F5513" />
          <ellipse cx="40" cy="36" rx="3.5" ry="6" transform="rotate(-30 40 36)" fill="#B37E28" />
          <ellipse cx="60" cy="38" rx="3.5" ry="6" transform="rotate(40 60 38)" fill="#B37E28" />
          {/* Curry leaf accent */}
          <path
            d="M48 22C43 18 36 22 35 28C40 28 46 26 48 22Z"
            fill="#496335"
          />
        </svg>
      );

    case "podi":
      return (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="42" fill="#F8EFEA" stroke="#EBDDC7" strokeWidth="1.5" />
          {/* Steaming Idli with Podi and Gingelly Oil pool */}
          <ellipse cx="50" cy="56" rx="28" ry="18" fill="#FBF9F5" stroke="#E6EDE1" strokeWidth="2" />
          {/* Roasted Podi Sprinkle on top */}
          <ellipse cx="50" cy="54" rx="18" ry="10" fill="#8F482D" opacity="0.85" />
          {/* Golden oil pool center */}
          <ellipse cx="50" cy="54" rx="9" ry="5" fill="#C89539" />
          {/* Little roasted urad dal & curry leaf sprinkles */}
          <circle cx="44" cy="52" r="1.5" fill="#4A2C1B" />
          <circle cx="55" cy="55" r="1.5" fill="#4A2C1B" />
          <path
            d="M48 46C49 42 52 43 53 45C51 46 49 47 48 46Z"
            fill="#3B512A"
          />
          {/* Steam curls */}
          <path
            d="M42 34C40 28 44 24 43 18"
            stroke="#B89684"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
          <path
            d="M54 32C56 26 52 22 55 16"
            stroke="#B89684"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
        </svg>
      );

    case "ragi":
      return (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="42" fill="#F5F1ED" stroke="#DEC7A5" strokeWidth="1.5" />
          {/* Finger Millet (Ragi) ear/stalk motif */}
          <path
            d="M50 82V32"
            stroke="#496335"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Central finger spikes */}
          <path
            d="M50 34C48 24 45 18 42 14"
            stroke="#6A5342"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M50 34C52 24 55 18 58 14"
            stroke="#6A5342"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M50 34C44 26 36 24 30 22"
            stroke="#6A5342"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M50 34C56 26 64 24 70 22"
            stroke="#6A5342"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Fine ground flour mound at base */}
          <path
            d="M26 80C34 68 66 68 74 80Z"
            fill="#6A5342"
            opacity="0.9"
          />
          <path
            d="M32 80C38 72 62 72 68 80Z"
            fill="#826853"
          />
        </svg>
      );

    case "puttu":
      return (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="42" fill="#F7EFEB" stroke="#D6C0B4" strokeWidth="1.5" />
          {/* Traditional Puttu Kutti (cylindrical steamer) */}
          <rect x="40" y="30" width="20" height="42" rx="3" fill="#6B3B37" />
          {/* Layered grated coconut stripes */}
          <rect x="40" y="34" width="20" height="4" fill="#FDFBF7" />
          <rect x="40" y="48" width="20" height="4" fill="#FDFBF7" />
          <rect x="40" y="62" width="20" height="4" fill="#FDFBF7" />
          {/* Steamer lid & knob */}
          <path
            d="M37 30C37 26 63 26 63 30Z"
            fill="#4F2522"
          />
          <circle cx="50" cy="24" r="3" fill="#C89539" />
          {/* Base pot */}
          <path
            d="M32 72C32 72 36 84 50 84C64 84 68 72 68 72Z"
            fill="#854F4B"
          />
          {/* Heritage paddy grain motif */}
          <ellipse cx="26" cy="46" rx="3" ry="7" transform="rotate(-30 26 46)" fill="#C89539" />
          <ellipse cx="74" cy="46" rx="3" ry="7" transform="rotate(30 74 46)" fill="#C89539" />
        </svg>
      );

    default:
      return null;
  }
};

