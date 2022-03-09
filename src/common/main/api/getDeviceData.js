export default function getDeviceData(data) {
  return data.map(profile => {
    return [
      {
        type: 'phones',
        index: 'Device',
        data: profile.data
            ? profile.data.name.toUpperCase() : ""
      },
      {
        index: "Product",
        data: profile.data.product 
            ? profile.data.product : ""
      },
      {
        index: "User ID",
        data: profile.data.ownerUserName
            ? profile.data.ownerUserName : ""
      },
      {
        index: "Description",
        data: profile.data.description
            ? profile.data.description : ""
      },
      {
        index: "Primary Line",
        data: profile.data.lines
            ? profile.data.lines.line[0].dirn.pattern : ""
      },
      {
        index: "E164 Mask",
        data: profile.data.lines
            ? profile.data.lines.line[0].e164Mask : ""
      },
      {
        index: "Location",
        data: profile.meta.hierarchy
            ? profile.meta.hierarchy.split("London Drugs.")[1] : ""
      }
    ];
  });
};