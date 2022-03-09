export default function totalToRender(profileDataToRender, totalToRenderNumber) {
  // try catch to prevent exception when api has not been retrieved //
  try   {return profileDataToRender.slice(0, totalToRenderNumber)}
  catch {return []}
}