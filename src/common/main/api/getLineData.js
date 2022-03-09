export default function getLineData(data) {
  return data.map(profile => {
    return [
      {
        type: "lines",
        index: "Line",
        data: profile.data.pattern ? profile.data.pattern : ""
      },
      {
        index: "Alerting Name",
        data: profile.data.alertingName ? profile.data.alertingName : ""
      },
      {
        index: "Description",
        data: profile.data.description ? profile.data.description : ""
      },
      {
        index: "Device",
        data: profile.data.associatedDevices
            ? profile.data.associatedDevices.device[0] : ""
      },
      {
        index: "Forward",
        data: (() => {
          try {
            let destruct = profile['data']['callForwardAll']['destination']
            if (destruct === null) {
              let vm = profile['data']['callForwardAll']['forwardToVoiceMail']
              return vm ? "Voicemail": "None"
            }
            return destruct
          }
          catch {return ""}
        })()
      },
      {
        index: "Location",
        data: profile.meta.hierarchy
            ? profile.meta.hierarchy.split("London Drugs.")[1] : ""
      }
    ];
  });
};