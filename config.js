const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiY2FsdW1sYnIiLCJhIjoiY2p1aThnamliMDR5eTRkbnFxNDQ1YWloNyJ9.8JSM4DjuVYyCzwGNUlAkCg",
  CSV: "./community_activities_reprojected.csv",
  center: [0.07564816652689266, 51.58501038502946],
  zoom: 12,
  title: "Youth Community Activities",
  description:
    "You can search by address to sort the list below by distance. You can also filter the list by clicking the filter button below.",
  sideBarInfo: ["Group Name", "What they do","Postcode","Website"],
  popupInfo: ["Group Name"],
  //address: ["Merged"],
  filters: [
    {
      type: "dropdown",
      title: "Category: ",
      columnHeader: "Categories",
      listItems: [
        "Creative arts",
        "Education and STEM",
        "Faith-based activities",
        "Health, wellbeing & welfare",
        "Social youth spaces & youth clubs",
        "Sports and physical activities",
      ],
    },
	/*
    {
      type: "checkbox",
      title: "Devices available: ",
      columnHeader: "Devices_available", // Case sensitive - must match spreadsheet entry
      listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Clients: ",
      columnHeader: "Clients",
      listItems: [
        "Adults",
        "Disabled",
        "Homeless",
        "Immigrants/Refugees",
        "Low Income",
        "Seniors",
        "Youth: Pre-teen",
        "Youth: Teen",
      ],
    },
	*/
  ],
};
