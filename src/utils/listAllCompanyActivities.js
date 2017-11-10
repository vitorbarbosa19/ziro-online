export default (main_activity, secondary_activities) => {
  const allActivities = []
  allActivities.push(main_activity[0].code)
  secondary_activities.map((secondary_activity) => {
    allActivities.push(secondary_activity.code)
  })
  return allActivities
}
