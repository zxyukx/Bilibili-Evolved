import { ComponentMetadata, ComponentEntry } from '@/components/types'
import { addComponentListener } from '@/core/settings'
import { allVideoUrls } from '@/core/utils/urls'

let intervalID
let updateFunc = none

const entry: ComponentEntry = async ({ settings: { options }, metadata }) => {
  const video = dq('.bilibili-player-video-wrap')
  const time = document.createElement('span')
  time.id = 'cur-time'
  const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '70',
    fontSize: 'x-large',
    fontWeight: 'bold',
    margin: '1rem',
  }
  const dyStyle = {
    color: options.color,
    opacity: options.opacity,
  }
  Object.keys(Object.assign(style, dyStyle)).forEach(key => {
    time.style[key] = style[key]
  })

  Object.keys(dyStyle).forEach(key => {
    addComponentListener(`${metadata.name}.${key}`, (value: string) => {
      time.style[key] = value
    })
  })

  video.appendChild(time)
  const parseTime = (t: Date): string => {
    let hours = t.getHours()
    let minutes = t.getMinutes().toFixed()
    let seconds = t.getSeconds().toFixed()

    if (Number(minutes) < 10) {
      minutes = minutes.padStart(2, '0')
    }

    if (Number(seconds) < 10) {
      seconds = seconds.padStart(2, '0')
    }

    if (!options?.TFFormat && hours > 12) {
      hours -= 12
    }

    const timeStr = `${hours}:${minutes}`
    return options?.showSecond ? `${timeStr}:${seconds}` : timeStr
  }
  updateFunc = () => {
    const t = new Date()
    time.innerHTML = parseTime(t)
  }
  intervalID = setInterval(updateFunc, 1000)
}
export const component: ComponentMetadata = {
  name: 'videoCurTime',
  author: {
    name: 'FoundTheWOUT',
    link: 'https://github.com/FoundTheWOUT',
  },
  description: {
    'zh-CN': '在视频的右上角显示当前时间',
  },
  displayName: '视频内显示时间',
  entry,
  reload() {
    document.getElementById('cur-time').style.visibility = ''
    intervalID = setInterval(updateFunc, 1000)
  },
  unload() {
    document.getElementById('cur-time').style.visibility = 'hidden'
    clearInterval(intervalID)
  },
  tags: [componentsTags.video],
  options: {
    opacity: {
      slider: {
        max: 1,
        min: 0,
        step: 0.01,
      },
      defaultValue: 0.5,
      displayName: '透明度',
    },
    color: {
      color: true,
      defaultValue: '#d1d5db',
      displayName: '颜色',
    },
    showSecond: {
      defaultValue: false,
      displayName: '是否显示秒',
    },
    TFFormat: {
      defaultValue: true,
      displayName: '24小时制',
    },
  },
  urlInclude: allVideoUrls,
}
