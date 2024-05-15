import { useEffect, useState } from 'react'

//Test Image
import testImg from '../assets/test_image_music_wid.jpg'

//Icons
import { FaBackwardStep } from 'react-icons/fa6'
import { FaStepForward } from 'react-icons/fa'

function MusicPlayerWidget() {
  const testName = {
    name: 'It Was a Good Day',
    artist: 'Ice Cube',
    album: 'The Predator',
    lenght: 260
  }

  const [currentTime, setCurrentTime] = useState(0)

  const [isPaused, setIsPaused] = useState(true)

  // Custom Functions
  const toMins = (secs) => {
    if (secs == 0) {
      return '0:00'
    }
    return `${Math.floor(secs / 60)}:${secs % 60 == 0 ? '00' : secs % 60 < 10 ? '0' + (secs % 60).toString() : secs % 60}`
  }

  //Music Time Demo
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => setCurrentTime(currentTime + 1), 1000)

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <div className="w-1/2 h-full rounded-3xl text-white cursor-pointer transitions music-player-bg bg-cover bg-no-repeat bg-center">
      <div className="w-full flex h-full rounded-3xl bg-black bg-opacity-25 music-player-blur p-5 flex-col justify-start">
        <div className="w-full">
          <span className="w-full flex justify-start text-10 text-white font-extralight mb-1">
            Sound System Plugin
          </span>
        </div>
        <div className="w-full flex justify-start items-end mt-2">
          <img src={testImg} className="h-110" />
          <div className="ml-2 flex flex-col pb-5">
            <span className="text-xs font-light">{testName.name}</span>
            <span className="overflow-x-hidden w-full text-8-c font-extralight">
              {testName.artist} - {testName.album}
            </span>
          </div>
        </div>
        <div className="w-full">
          <input
            type="range"
            className="w-full c-range-input"
            max={testName.lenght}
            min="0"
            defaultValue={currentTime}
            onChange={(e) => {
              setCurrentTime(parseInt(e.target.value))
            }}
          />
          <div className="w-full flex justify-between text-10 font-extralight">
            <span>{toMins(currentTime)}</span>
            <span>{toMins(testName.lenght)}</span>
          </div>

          <div className="w-full flex justify-center pt-3">
            <div className="w-2/3 flex justify-between items-center">
              <FaBackwardStep className="text-2xl" />

              <div className="flex h-7 items-center" onClick={() => setIsPaused(!isPaused)}>
                <div
                  className={
                    isPaused ? 'play-button -mr-1 transitions' : 'h-6 w-1 bg-white mr-1 transitions'
                  }
                ></div>
                <div
                  className={isPaused ? 'w-0 transitions' : 'h-6 w-1 bg-white transitions'}
                ></div>
              </div>

              <FaStepForward className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayerWidget
