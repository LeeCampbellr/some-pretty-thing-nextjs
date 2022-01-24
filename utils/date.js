import React from "react"
import dayjs from "dayjs"

var LocalizedFormat = require("dayjs/plugin/localizedFormat")
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(LocalizedFormat)
dayjs.extend(relativeTime)

const Date = ({ date }) => {
  const time = date

  return <React.Fragment>{`${timestamp(time)}`}</React.Fragment>
}

function timestamp(date) {
  const post = dayjs(date)
  const diff = -post.diff(dayjs(), "days")

  if (diff < 7) {
    return post.fromNow()
  } else if (diff === 7) {
    return "a week ago"
  } else {
    return post.format("LL")
  }
}

export default Date
