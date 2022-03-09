export default function getVoicemailData(data) {
  return data.map(profile => {
    return [
      {
        type: "voicemail",
        index: "Voicemail ID",
        data: profile.profile ? profile.profile.toUpperCase() : ""
      },
      {
        index: "Name",
        data: profile.data.DisplayName ? profile.data.DisplayName : ""
      },
      {
        index: "Title",
        data: profile.data.Title ? profile.data.Title : ""
      },
      {
        index: "Extension",
        data: profile.data.DtmfAccessId ? profile.data.DtmfAccessId : ""
      },
      {
        index: "Location",
        data: profile.meta.hierarchy
            ? profile.meta.hierarchy.split("London Drugs.")[1] : ""
      }
    ];
  });
};