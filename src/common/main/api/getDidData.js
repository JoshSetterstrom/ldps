export default function getDidData(data) {
  return data.map(profile => {
    return [
      {
        type: "did",
        index: "DID",
        data: profile.did ? profile.did : ""
      },
      {
        index: "Extension",
        data: profile.line ? profile.line : ""
      },
      {
        index: "Description",
        data: profile.description ? profile.description : ""
      },
      {
        index: "Area",
        data: profile.location ? profile.location : ""
      },
      {
        index: "Location",
        data: profile.area ? profile.area : ""
      }
    ];
  });
};