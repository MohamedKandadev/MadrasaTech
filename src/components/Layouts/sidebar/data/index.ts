import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        url: "/",
        items: [],
      },
      {
        title: "Students",
        icon: Icons.User,
        items: [
          {
            title: "List Students",
            url: "/forms/form-elements",
          },
          {
            title: "Add new student",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Teachers",
        icon: Icons.User,
        items: [
          {
            title: "List Teachers",
            url: "/forms/form-elements",
          },
          {
            title: "Add new teacher",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Employee",
        icon: Icons.User,
        items: [
          {
            title: "List employee",
            url: "/forms/form-elements",
          },
          {
            title: "Add new empley",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Academics",
        icon: Icons.User,
        items: [
          {
            title: "Academic Year",
            url: "/forms/form-elements",
          },
          {
            title: "Classes",
            url: "/forms/form-elements",
          },
          {
            title: "subjects",
            url: "/forms/form-layout",
          },
          {
            title: "subject routine",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Attendance",
        url: "/calendar",
        icon: Icons.Alphabet,
        items: [],
      },
      {
        title: "Calendar",
        url: "/calendar",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "Payment",
        url: "/calendar",
        icon: Icons.Alphabet,
        items: [],
      },
      {
        title: "Profile",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Forms",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Form Elements",
            url: "/forms/form-elements",
          },
          {
            title: "Form Layout",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Tables",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Tables",
            url: "/tables",
          },
        ],
      },
      {
        title: "Pages",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Settings",
            url: "/pages/settings",
          },
        ],
      },
    ],
  },
  {
    label: "OTHERS",
    items: [
      {
        title: "Charts",
        icon: Icons.PieChart,
        items: [
          {
            title: "Basic Chart",
            url: "/charts/basic-chart",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
        ],
      },
      {
        title: "Authentication",
        icon: Icons.Authentication,
        items: [
          {
            title: "Sign In",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
