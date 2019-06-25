import { notification } from "antd"
import { IconType, ArgsProps } from "antd/lib/notification"

export const showNotification = (type: IconType, args: ArgsProps) =>
  notification[type]({
    placement: "bottomRight",
    duration: 0,
    ...args,
  })
