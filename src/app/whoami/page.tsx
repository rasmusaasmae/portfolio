import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import Education from './_components/education';
import Experience from './_components/experience';
import Foundation from './_components/foundation';
import Love from './_components/love';
import Sport from './_components/sport';

export default function WhoAmI() {
  return (
    <main className="flex h-screen flex-col items-center p-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={312.871}
        height={947.944}
        viewBox="0 0 82.781 250.81"
        className="fill-gray-900 stroke-gray-800 stroke-1"
      >
        <Dialog>
          <DialogTrigger asChild>
            <g // Torso and Heart
              transform="translate(-63.286 -23.541)"
              className="group hover:cursor-pointer"
            >
              <path // Torso
                d="M94.285 62.396c-.006 1.89-1.56 3.044-3.231 3.517-5.798 2.603-11.768 5.044-17.216 8.259-2.324 2.952-3.73 6.534-4.228 10.249-.721 3.599.668 7.243-.258 10.828-.485 3.24-1.11 6.472-.74 9.76-.039 5.786-2.334 11.169-3.413 16.778.004 6.413-.776 12.817-.385 19.223.062 2.192-.09 4.381-.143 6.572l6.54.772c1.818-3.346 1.502-7.347 2.77-10.895 1.226-4.682 3.712-9.043 3.848-13.974.415-3.512 1.097-6.998 1.641-10.486l2.75-9.411c2.375 3.662 1.914 8.204 1.807 12.368-.492 6.59-.234 13.697-1.446 20.208-.252 2.115 5.292 2.629 6.797 2.853 6.391.814 8.659 1.604 15.049 2.305l22.128-3.028c-.936-6.275-1.116-14.334-1.605-20.642.165-5.611 1.89-11.004 3.62-16.299.395 3.134 1.796 5.993 2.7 8.973-.122 1.724.616 3.324.674 4.989-.309 2.997.507 5.955.283 8.967-.194 2.751.41 5.455.525 8.175-.42 3.656-.019 7.416-.959 10.99-.373 1.447-1.729 3.03.574 3.204l5.994 2.353c.708-3.59 1.534-7.168 2.524-10.674.105-2.891 1.575-5.506 1.654-8.417 1.1-6.908 1.254-14.069-.495-20.878-.499-6.615.316-13.572-2.418-19.803-1.118-2.985-.421-6.327-1.69-9.29-1.017-3.478-2.888-6.8-5.956-8.851-3.87-2.666-8.34-4.37-12.598-6.329-2.78-.93-5.68-1.714-8.859-2.603-3.48-.625-3.857-4.76-3.754-6.163-2.607-.075-10.33-.917-12.04.6-.492.437-.436 3.511-.444 5.8z"
                className="transition-colors group-hover:fill-[#ff6361]"
              />
              <g // Heart
                className="fill-transparent stroke-transparent stroke-[0.6] transition-colors group-hover:stroke-white"
              >
                <path d="M105.52 83.575c-.041-.658.395-1.44.51-1.83-.286-.314-.262-.532-.94-.953-.64.48-1.168 1.313-1.572 2.189l.563.657c-.47-.5-.845-.8-1.314-1.3-.55.133-1.435 1.344-1.115 1.558 1.454.434 2.403 2.837 1.928 3.433-1.046 1.616-.272 3.506.632 5.016.098 1.07 1.071 1.77 1.926 2.338.714.574 1.877.913 2.656 1.247.793.34 1.442 1.142 2.43 1.286.279-.135 2.083-.244 2.956-5.611-.04-2.546-1.599-4.451-3.181-6.313.444-.152.877-.256 1.303-.437.553-.433.18-1.11-.025-1.655-.753-.195-1.174.42-1.461.216-.575-1.212-1.793-1.072-2.573-1.26-.007-.26.079-.56-.004-.798-.192-.19-.388-.368-.655-.191-.195.458-.326.975-.57 1.394-.588.209-.782.682-1.495 1.014z" />
                <path d="M106.709 87.667c-.335-1.494.312-2.792 1.602-3.323 1.122-.38 2.245-.76 3.367-1.138-.258.668.058 1.196.46 1.698-1.287.346-1.851.773-2.635 1.477-.369.755.071 1.208.429 1.905M105.65 83.462c-.572.703-.705 1.479-.836 2.35.24 1.344.477 2.69.696 4.038-.12 1.033-.745 1.65-1.399 2.402" />
                <path d="M105.067 90.946c.171.534.313.94.793 1.399 1.18.38 1.18.63 1.679 1.236M108.331 88.568c.77.464 1.459.757 2.029 1.655.213 1.7-.411 4.064.093 4.99" />
                <path d="M110.08 89.85c-.272.233-.544.466-.746.805-.202.338-.334.78-.416 1.185-.081.404-.113.77-.144 1.134" />
                <path d="M107.865 90.363c.365.086.73.171 1.026.179.295.008.52-.062.719-.183.198-.12.369-.291.54-.462M112.925 91.202a22.447 22.447 0 0 1-1.061-.155 5.066 5.066 0 0 1-.933-.24 2.581 2.581 0 0 1-.594-.35" />
                <path d="M111.619 90.946c.179.249.357.497.474.707.117.21.17.381.225.552M110.383 91.389c.132.256.264.513.385.727.12.213.23.384.38.586.152.202.347.436.54.669M105.72 92.228c.202-.1.404-.202.63-.28.225-.077.474-.132.633-.159.16-.027.23-.027.3-.027" />
              </g>
            </g>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] w-11/12 overflow-y-auto rounded-lg bg-gray-950 py-9 sm:max-w-lg">
            <Love />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <g // Legs
              className="hover:cursor-pointer"
            >
              <path
                d="M126.345 138.428c-7.013-.105-10.004 2.4-22.081 2.302-11.877-.095-15.704-4.517-21.361-4.138-1.153.077-.956 3.269-1.968 7.013-1.507 7.86-2.315 15.456-3.424 23.912-.147 5.62.14 11.243 1.191 16.774.631 5.353 1.816 10.736 1.038 16.136-.199 4.252-.495 8.54-1.664 12.645-.753 8.175-.01 16.365.755 24.506.214 4.538.734 9.114.69 13.665 1.096 2.273 7.295 1.06 9.076.64-.045-3.583 1.95-13.821 2.369-20.735.596-3.424 2.649-6.479 2.613-10.047-.004-3.779-.451-7.591.435-11.323 1.242-7.252 2.86-14.453 3.546-21.784 1.102-7.968 3.671-15.651 4.768-23.611-.175-1.53 1.059-3.12 2.635-2.21 2.071 1.362 2.05 4.226 2.851 6.372 2.398 8.916 5.487 17.627 7.965 26.522 1.61 5.206 3.697 10.354 3.807 15.881.432 4.96-.219 10.281 2.45 14.75 1.538 4.753 1.394 9.863 1.943 14.796-.038 2.78 1.617 5.31 1.152 8.141-.14 2.927 1.62 3.044 4.46 3.426 4.886-.298 4.437-.692 4.522-3.76.473-5.91 1.947-11.782 1.552-17.755-.33-7.467.201-15.006-.966-22.411-.803-4.714-1.215-9.488-1.885-14.225-.67-4.165-.131-8.34.282-12.497a76.247 76.247 0 0 0-1.638-19.965c-.88-4.528-1.854-9.09-3.338-13.45-.58-.967-1.46-10.143-1.636-11.262z"
                transform="translate(-63.286 -23.541)"
                className="transition-colors hover:fill-[#58508d]"
              />
            </g>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] w-11/12 overflow-y-auto rounded-lg bg-gray-950 py-9 sm:max-w-lg">
            <Sport />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <g // Feet
              transform="translate(-63.286 -23.541)"
              className="transition-colors hover:cursor-pointer hover:fill-[#003f5c]"
            >
              <path // Right Foot
                d="M79.623 252.084c.01 2.19.08 4.423-.374 6.572-.408 1.302-1.049 2.532-2.039 3.487-1.194 1.358-2.408 2.706-3.75 3.92-1.415.768-3.29 1.075-4.082 2.641-.563 1.003-.927 2.48.255 3.211 1.045.797 2.092 1.761 3.481 1.838 1.16.353 2.285-.344 3.42-.507 1.99-.512 3.887-1.31 5.865-1.856 1.271-.7.958-2.293 2.223-3.047 1.29-.84 2.9-.77 4.07-1.853 1.549-1.156 2.023-3.458 1.128-5.158-.985-2.708-1.049-5.63-1.036-8.475.016-1.866-2.263-.175-3.32-.47-1.503.013-3.115.431-4.545-.175-.3-.086-1.273-.844-1.296-.128z"
              />
              <path // Left Foot
                d="M124.871 250.261c-.179.842-.281 3.677-1.002 5.394-.556 1.052-.594 2.226-.301 3.362.281 1.262 1.382 2.128 2.423 2.788 1.611.66 3.075 1.67 4.367 2.821.893 1.044 1.427 2.31 1.89 3.584.539 1.26 1.8 1.958 2.777 2.843 1.2.905 2.536 1.716 4.095 1.66 1.42-.083 2.903.173 4.284-.142 1.347-.278 2.316-1.474 2.143-2.862-.051-1.269-1.119-2.124-2.036-2.86-1.07-.949-2.253-1.783-3.263-2.79-2.2-2.55-3.673-5.612-5.084-8.637-.542-1.502-.87-3.014-1.052-4.643-.952.375-.952.695-2.853 1.172-1.251.09-2.41-.032-3.62-.363-1.006-.404-1.688-.622-2.768-1.327z"
              />
            </g>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] w-11/12 overflow-y-auto rounded-lg bg-gray-950 py-9 sm:max-w-lg">
            <Foundation />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <g // Hands
              transform="translate(-63.286 -23.541)"
              className="transition-colors hover:cursor-pointer hover:fill-[#bc5090]"
            >
              <path // Right Hand
                d="M64.566 147.624c-.034 4.055-.459 8.09-.716 12.134-.322.942.535 1.53.997 2.24.546.754.768 1.7 1.392 2.41.702.931 1.246 2.078 2.254 2.712.617.438 1.263.864 2.056.721 1.051.022 2.102.056 3.154.047 1.018-.198 1.887-.744 2.65-1.427.444-.565 1.474-1.195.56-1.812-.371-.722-1.16-1.026-1.693-1.48-.309-1.633-.84-3.26-.627-4.943.193-2.345-.036-4.908-1.52-6.834-.583-.925-1.515-1.75-1.797-2.79-.684-.644-2.104-.3-3.06-.574l-3.65-.404zm5.884 11.44c.957-.215 1.035.758 1.056 1.444.105 1.182.213 2.364.327 3.546-.815-1.135-1.754-2.337-1.742-3.807-.062-.437-.122-.957.36-1.182z"
              />
              <path // Left Hand
                d="M130.8 146.08c-.388.724-1.098 1.182-1.653 1.769-.65.515-.966 1.304-1.43 1.971l-2.175 3.468c.01.911.11 1.827-.078 2.728-.037.848-.434 1.608-.694 2.402-.29.762-.532 1.553-.85 2.298-.381.376-.73.775-.948 1.27-.278.303.334.385.496.58.473.131.165.398-.036.646-.154.253-.54.483-.25.78.206.375.345.818.592 1.15.829.334 1.589.8 2.357 1.25l4.443-.092c.083-.314.196-.605.541-.694.736-.44 1.57-.738 2.176-1.363.536-.497 1.143-.93 1.633-1.469.538-.813 1.198-1.555 1.551-2.475.484-.962.89-1.955 1.233-2.974.327-.873.404-1.817.619-2.721.035-1.14.218-2.282.046-3.418-.103-.717-.091-1.438-.046-2.16l-7.526-2.946zm-1.613 10.783c.314.048.657.196.644.55-.321.707-.581 1.45-.94 2.135-.418.466-.698 1.086-1.29 1.355l-1.144.702c.779-1.427 1.382-2.94 2.011-4.436.178-.298.402-.301.719-.306z"
              />
            </g>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] w-11/12 overflow-y-auto rounded-lg bg-gray-950 py-9 sm:max-w-lg">
            <Experience />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <g // Head and Brain
              transform="translate(-63.286 -23.541)"
              className="group hover:cursor-pointer"
            >
              <path // Head
                d="M97.49 24.044c3.775-.05 8.082.765 10.495 3.946 1.746 2.527 3.778 5.117 4.024 8.299.184 1.842.163 3.765-.501 5.515.248.49 2.01-.374 2.057 1.063.188 1.678-.15 3.454-.867 4.978-.43 1.671-2.468 1.638-3.25 2.658-.942 1.888-1.483 3.936-2.425 5.823-1.324.686-3.202 2.058-4.559 2.671-2.613.481-5.175-.708-7.524-1.71-1.608-1.312-2.04-4.22-3.583-5.608-1.819-.656-3.151-2.268-3.23-4.223-.134-1.41-1.41-3.816.814-4.048.357-1.543-.862-3.225-1.11-4.826-.49-1.701-.518-3.664.547-5.161.795-1.36.482-3.126 1.564-4.333 1.473-2.07 3.911-3.032 5.932-4.439.504-.28 1.046-.507 1.617-.605z"
                className="transition-colors group-hover:fill-[#ffa600]"
              />
              <g // Brain
                className="fill-transparent stroke-transparent stroke-[0.3] transition-colors group-hover:stroke-white"
              >
                <path // Cerbellum (left)
                  d="M102.86 40.88c1.2 1.06 2.363.7 3.636.554-.545 1.772-3.726 2.63-5.036 1.597.42-1.325 1.295-2.039 1.4-2.151z"
                  className="transition-colors group-hover:fill-gray-600"
                />
                <path // Cerbellum (right)
                  d="M93.624 41.455c-.157.901 3.443 2.287 4.885 1.537-.02-.747-1.212-1.961-1.401-2.074-.068-.04-1.325 1.197-3.484.537z"
                  className="transition-colors group-hover:fill-gray-600"
                />
                <path // Middle Stuff
                  d="m98.937 45.357 2.059.016c.201-1.813.537-3.262 1.847-4.499-.34-.34-.648-.662-.795-1.08-1.05.563-1.581.181-2.037-.696-.529.921-1.184.931-1.973.68-.445.36-1.023 1.112-.974 1.153 1.497 1.263 1.621 2.234 1.873 4.426z"
                  className="transition-colors group-hover:fill-gray-400"
                />
                <path // Main Part
                  d="M99.968 38.984c1.293 2.152 1.616.562 2.094.852 1.232 3.717 8.527 1.747 6.76-4.546.997-3.468-4.477-7.093-5.186-7.546-1.406-.498-2.488-.71-3.627.395-1.075-1.467-3.615-.448-3.777-.324-1.489.76-2.468 1.74-3.875 3.12-1.965 3.853-.87 3.903-1.174 4.384-1.756 3.63 1.818 5.818 2.188 6 2.494 1.307 4.01-.84 4.754-1.583.308.304 1.643.297 1.843-.752z"
                  className="transition-colors group-hover:fill-gray-300"
                />
                <g // Brain Lines
                  className="stroke-[0.1]"
                >
                  <path d="M100 38.938V27.897" />
                  <path d="M99.952 36.29c-.617.025-1.235.049-1.792-.041-.558-.09-1.055-.294-1.373-.552a1.454 1.454 0 0 1-.515-.848c-.06-.278-.042-.524-.147-.836-.105-.312-.333-.69-.513-.938-.18-.249-.311-.369-.374-.575-.063-.207-.057-.5.069-.696.126-.195.371-.29.605-.305.234-.015.456.05.635.17.18.12.318.294.456.468M96.14 31.454c.078-.138.156-.276.147-.44-.01-.166-.105-.358-.201-.55" />
                  <path d="M96.212 34.726c-.156.21-.312.42-.516.525-.204.105-.455.105-.707.105M94.917 34.061c-.24.198-.48.396-.641.596-.162.201-.246.405-.33.609M95.205 32.533c-.264-.018-.528-.036-.738.006a.846.846 0 0 0-.509.317c-.144.174-.276.42-.366.576-.09.156-.138.221-.21.248-.071.027-.167.015-.263.003M94.108 29.314c.168.138.335.275.44.422a.75.75 0 0 1 .141.483c-.006.18-.06.383-.114.587" />
                  <path d="M93.407 31.004c.06.156.12.312.074.465-.045.152-.194.302-.356.45-.162.146-.336.29-.459.518-.123.227-.195.54-.2.809-.007.27.053.497.158.77.105.273.255.59.333.848.078.258.084.456.027.696-.057.24-.177.521-.26.818-.085.296-.133.608-.06.872.071.264.263.48.494.653.23.174.5.306.854.378.354.072.791.084 1.256.14.464.058.956.16 1.321.297.366.138.606.312.84.483l.689.506M98.855 37.657c-.072.216-.144.432-.282.537-.137.105-.341.099-.557.036-.216-.063-.444-.183-.57-.336-.125-.153-.15-.338-.173-.524" />
                  <path d="M97.309 39.096c-.096.3-.192.6-.351.818-.159.22-.38.357-.584.435-.204.078-.39.096-.576.114M93.856 38.179c-.252.18-.503.36-.665.56a.973.973 0 0 0-.231.615c.003.192.08.353.228.488.147.135.362.243.48.366.116.123.134.26.257.384.123.122.35.23.506.293.156.063.24.081.324.1" />
                  <path d="M93.658 40.103c.144-.108.288-.216.447-.303.159-.087.332-.152.48-.257.146-.105.266-.25.386-.393M92.85 35.985c-.193-.216-.385-.431-.58-.578a1.317 1.317 0 0 0-.569-.255 1.658 1.658 0 0 0-.488.006M98.01 33.99c.126-.163.252-.325.42-.42.167-.096.377-.126.587-.156M100.024 32.299c-.312-.054-.623-.108-.932-.225a2.772 2.772 0 0 1-.866-.524 1.885 1.885 0 0 1-.549-.816c-.099-.311-.099-.659-.18-.938a1.054 1.054 0 0 0-.422-.602.591.591 0 0 0-.552-.06c-.173.072-.323.234-.473.396M97.38 29.44c.216-.078.432-.156.588-.258a.799.799 0 0 0 .297-.33.48.48 0 0 0 .033-.258M99.981 29.721c.222-.085.445-.17.624-.183.18-.013.317.047.38.158.065.11.056.273.048.436M101.494 28.44c0 .17 0 .341.064.49.064.15.193.279.287.36.094.08.153.115.213.15M97.437 33.081c.203.219.407.438.508.739.102.3.102.683.102 1.066M92.75 36.41c.304-.094.609-.188.851-.16.242.027.422.175.625.324.203.148.43.297.696.351.265.055.57.016.875-.023M100.04 36.269c.687-.008 1.374-.016 1.964-.117.59-.102 1.082-.297 1.348-.688.265-.39.305-.976.48-1.484.176-.508.489-.938.813-1.188.324-.25.66-.32.957-.289.297.031.555.164.727.363.172.2.257.465.324.622.066.156.113.203.16.25M101.305 38.52c.234-.274.469-.548.719-.731.25-.184.515-.278.78-.371" />
                  <path d="M102.008 39.785c.406-.352.813-.703 1.234-.934.422-.23.86-.34 1.282-.406.422-.066.828-.09 1.238-.172.41-.082.824-.223 1.106-.422.281-.2.43-.457.488-.758.059-.3.027-.644-.016-.992s-.097-.7-.066-1.027c.031-.329.148-.633.258-.97.11-.335.21-.702.183-1.042-.027-.34-.183-.653-.418-.934a3.324 3.324 0 0 0-.753-.656c-.208-.125-.31-.125-.41-.125M99.969 32.237c.289.024.578.047.879 0 .3-.046.613-.164.836-.336.222-.171.355-.398.43-.668.074-.27.09-.582.078-.875-.012-.293-.051-.566.027-.789a.764.764 0 0 1 .512-.465c.238-.07.52-.039.734.032.215.07.363.18.512.289M102.406 28.089c.274.023.547.047.735.113.187.066.289.176.39.285M105.665 29.378c-.157.156-.313.312-.391.488a.727.727 0 0 0-.02.535c.059.164.176.297.293.43M104.868 32.636c-.055-.219-.11-.438-.23-.621a1.03 1.03 0 0 0-.501-.399.838.838 0 0 0-.527-.004.698.698 0 0 0-.325.239c-.097.113-.207.261-.316.41M103.79 31.487a1.124 1.124 0 0 1-.215-.32c-.043-.117-.043-.25-.043-.383M101.047 33.41c.219.054.438.109.594.19.156.083.25.192.344.302M101.961 34.91c-.031-.25-.062-.5-.027-.739.035-.238.136-.465.297-.64.16-.176.379-.301.597-.426" />
                  <path d="M103.625 34.488c.117.195.235.39.356.539.12.148.246.25.41.3.164.051.367.051.57.051M105.172 33.925c.25.149.5.297.633.426s.149.238.164.324c.016.086.032.149.07.246.04.098.102.23.165.364M107.047 37.605c.266.031.532.063.731.121a.87.87 0 0 1 .422.246c.09.102.137.219.16.348.023.129.023.27.023.41M108.196 37.957c.148-.086.297-.172.398-.297.102-.125.157-.29.184-.395.027-.105.027-.152.027-.2M107.376 36.574c-.204-.118-.407-.235-.63-.25-.222-.016-.464.07-.671.187-.207.117-.38.266-.551.395-.172.129-.344.238-.516.273-.172.035-.344-.004-.515-.043M107.258 35.824c.125-.188.25-.375.43-.504.18-.13.414-.2.606-.2.191 0 .34.07.488.141M102.805 39.129c.219.25.437.5.684.71.246.212.52.383.695.47.176.085.254.085.332.085M105.735 38.191c.312.078.625.156.844.281A.898.898 0 0 1 107 39c.078.23.109.52.046.765-.062.246-.218.45-.402.532-.184.082-.394.043-.605.004" />
                  <path d="M105.266 39.011c.086.188.172.375.281.512.11.137.243.223.34.34a.83.83 0 0 1 .18.402.556.556 0 0 1-.05.344c-.048.082-.118.121-.25.18-.134.058-.33.137-.524.215" />
                </g>
              </g>
            </g>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] w-11/12 overflow-y-auto rounded-lg bg-gray-950 py-9 sm:max-w-lg">
            <Education />
          </DialogContent>
        </Dialog>
      </svg>
    </main>
  );
}