import type { Plugin } from "@nuxt/types"

/* Import plugins */
import getReadableDate from "./Utils/getReadableDate"
import getReadingTime from "./Utils/getReadingTime"
import getTurkeyTime from "./Utils/getTurkishTime"
import prepareMeta from "./Utils/prepareMeta"

/* Export and inject plugin */
const Util: Plugin = (_, inject) => {
  inject("getReadableDate", getReadableDate)
  inject("getReadingTime", getReadingTime)
  inject("getTurkeyTime", getTurkeyTime)
  inject("prepareMeta", prepareMeta)
}

export default Util
