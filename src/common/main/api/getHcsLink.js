export default function getHcsLink(profile, location_hierarchy) {
  let link = ""
  let store = ""

  try {
    let pkid = profile['meta']['pkid']
    let type = `link_${profile['type'].slice(0, -1)}`

    if (profile['meta']['hierarchy'].includes("Head Office")) store = "head_office"
    if (profile['meta']['hierarchy'].split("Store ").length === 1) store = "london_drugs"
    else store = "store_" + profile['meta']['hierarchy'].split("Store ")[1]

    profile['meta']['hierarchy'].split("Store ")
    
    link = location_hierarchy[0][type]
    link = link.replace("{1}", location_hierarchy[1][store])
    link = link.replace("{2}", pkid)
  }

  catch {/*catch non-existing device*/}

  return link
}