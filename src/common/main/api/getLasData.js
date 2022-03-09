export default function getLasData(data) {
  return data.map(profile => {
    return [
      {
        type: "las",
        index: "Device",
        data: profile.mac ? profile.mac : ""
      },
      {
        index: "User",
        data: profile.user ? profile.user : ""
      },
      {
        index: "Extension",
        data: profile.line ? profile.line : ""
      },
      {
        index: "Location",
        data: "LAS"
      }
    ];
  });
};