import type { Project } from "@/types";

/**
 * Update store links below with your live Play Store & App Store URLs per project.
 * Icons only appear when a link is provided.
 */
export const PROJECTS: Project[] = [
  {
    id: "foodmato-customer",
    title: "FoodMato App",
    description: "Customer food ordering and delivery app.",
    features: [
      "User Authentication",
      "Restaurant Discovery",
      "Search and Filters",
      "Cart Management",
      "Order Placement",
      "Live Order Tracking",
      "Secure Payments",
      "User Profile Management",
    ],
    tech: ["React Native", "Node.js", "MongoDB", "Supabase", "REST APIs"],
    gradient: "from-cyan-500/20 via-blue-600/20 to-indigo-600/20",
    accent: "cyan",
    imageAlt: "FoodMato Customer App mobile interface",
    storeLinks: {
      android:
        "https://play.google.com/store/apps/details?id=com.foodmato",
      ios: "https://apps.apple.com/app/foodmato-food-delivery/id6758516985",
    },
  },
  {
    id: "foodmato-restaurant",
    title: "FoodMato Restaurant Partner App",
    description:
      "Restaurant management app for orders, menu, reservations, and daily operations.",
    features: [
      "Real-time Order Management",
      "Menu Editor",
      "Table & Reservation System",
      "POS & SUNMI Thermal Printing",
      "Sales & Performance Reports",
      "Restaurant & Operational Settings",
      "Staff Access Control (RBAC)",
      "Reviews & Ratings",
    ],
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Supabase",
      "SUNMI POS",
      "REST APIs",
    ],
    gradient: "from-blue-500/20 via-indigo-600/20 to-violet-600/20",
    accent: "blue",
    imageAlt: "FoodMato Restaurant Partner App dashboard",
    storeLinks: {
      android:
        "https://play.google.com/store/apps/details?id=com.foodmatopartner",
      ios: "https://apps.apple.com/app/foodmato-restaurant-partner/id6739695298",
    },
  },
  {
    id: "foodmato-courier",
    title: "FoodMato Courier App",
    description: "Courier delivery partner app.",
    features: [
      "Order Assignment",
      "Real-Time Location Tracking",
      "Route Navigation",
      "Delivery Updates",
      "Earnings Dashboard",
      "Delivery History",
      "Push Notifications",
    ],
    tech: ["React Native", "Node.js", "Supabase", "Maps Integration"],
    gradient: "from-sky-500/20 via-cyan-600/20 to-teal-600/20",
    accent: "sky",
    imageAlt: "FoodMato Courier App delivery interface",
    storeLinks: {
      // Paste your courier app store URLs here:
      android: "",
      ios: "",
    },
  },
];
