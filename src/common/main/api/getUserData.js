export default function getUserData(data) {  
  return data.map(profile => {
    return [
      {
        type: "subscribers",
        index: "User ID",
        data: profile.data.userid ? profile.data.userid: ""
      },
      {
        index: "Display",
        data: profile.data.displayName ? profile.data.displayName : ""
      },
      {
        index: "Primary Line",
        data: profile.data.primaryExtension
            ? profile.data.primaryExtension.pattern : ""
      },
      {
        index: "Department",
        data: profile.data.title ? profile.data.title : ""
      },
      {
        index: "MAC Address",
        data: profile.data.Phone[0]
            ? profile.data.Phone[0].name : ""
      },
      {
        index: "Location",
        data: profile.meta.hierarchy
            ? profile.meta.hierarchy.split("London Drugs.")[1] : ""
      }
    ];
  });
};