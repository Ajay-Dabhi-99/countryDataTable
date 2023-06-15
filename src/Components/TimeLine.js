import React from "react";

function TimeLine() {
  return (
    <div className="max-w-4xl w-full mx-auto p-10">
       <h1 className="text-3xl font-bold flex justify-center text-blue-600 mb-8 underline"> Timeline</h1>
      <div className="timeline">
        <div className="timeline__card">
          <div className="w-full flex items-center flex-nowrap timeline__content">
            <div className="w-1/2 flex items-center justify-center space-x-5">
              <h3 className="text-3xl font-bold text-blue-600">2018</h3>
              <svg
                version="1.1"
                id="_x32_"
                width="40px"
                height="40px"
                viewBox="0 0 512 512"
              >
                <g>
                  <polygon
                    className="fill-blue-600"
                    points="171.57,400.992 145.57,374.976 137.023,366.429 111.023,340.429 55.883,373.164 81.898,399.179 
		112.82,430.102 138.836,456.117 	"
                  />
                  <path
                    className="fill-blue-600"
                    d="M351.227,426.617c-10.859-65.469-22.75-145,50.078-217.813c22.094-22.094,36.969-36.969,53.328-53.328
		l-98.109-98.109c-16.359,16.359-31.234,31.234-53.313,53.328c-72.844,72.828-152.359,60.922-217.828,50.078
		c-55.516-9.188-97.297,35.344-82.313,50.344l116.406,116.391l70.219-70.219c17.922-17.938,47.094-17.938,65.031,0
		c17.922,17.922,17.922,47.094,0,65.016l-70.234,70.234L300.883,508.93C315.867,523.914,360.414,482.133,351.227,426.617z
		 M108.258,264.273l-37.719-37.719l16.906-16.906l37.703,37.719L108.258,264.273z M335.18,119.585
		c9.938-9.922,30.797-5.172,46.609,10.625c15.797,15.813,20.547,36.672,10.625,46.594
		C382.477,186.742,325.258,129.523,335.18,119.585z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M174.086,361.32c-6.453,6.469-16.938,6.469-23.406,0l0,0c-6.469-6.469-6.469-16.938,0-23.406l59.828-59.828
		c6.453-6.469,16.938-6.469,23.406,0l0,0c6.469,6.469,6.469,16.953,0,23.406L174.086,361.32z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M472.836,137.273c3.313-3.313,6.766-6.75,10.406-10.406c25.859-25.859,41.766-85.688,14.672-112.781
		S410.992,2.898,385.133,28.757c-3.656,3.656-7.094,7.094-10.406,10.406L472.836,137.273z"
                  />
                </g>
              </svg>
            </div>
            <div className="w-1/2">
              <h3 className="text-base font-bold text-blue-600">web Developer</h3>
              <p className="text-xs text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit egestas,
                facilisi fusce quis ultrices tincidunt torquent leo.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline__card">
          <div className="w-full flex items-center flex-nowrap timeline__content">
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="flex text-base font-bold text-blue-600">javaScript</h3>
              <p className="text-xs text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit egestas,
                facilisi fusce quis ultrices tincidunt torquent leo.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center space-x-5">
              <svg
                version="1.1"
                id="_x32_"
                width="40px"
                height="40px"
                viewBox="0 0 512 512"
              >
                <g>
                  <polygon
                    className="fill-blue-600"
                    points="171.57,400.992 145.57,374.976 137.023,366.429 111.023,340.429 55.883,373.164 81.898,399.179 
		112.82,430.102 138.836,456.117 	"
                  />
                  <path
                    className="fill-blue-600"
                    d="M351.227,426.617c-10.859-65.469-22.75-145,50.078-217.813c22.094-22.094,36.969-36.969,53.328-53.328
		l-98.109-98.109c-16.359,16.359-31.234,31.234-53.313,53.328c-72.844,72.828-152.359,60.922-217.828,50.078
		c-55.516-9.188-97.297,35.344-82.313,50.344l116.406,116.391l70.219-70.219c17.922-17.938,47.094-17.938,65.031,0
		c17.922,17.922,17.922,47.094,0,65.016l-70.234,70.234L300.883,508.93C315.867,523.914,360.414,482.133,351.227,426.617z
		 M108.258,264.273l-37.719-37.719l16.906-16.906l37.703,37.719L108.258,264.273z M335.18,119.585
		c9.938-9.922,30.797-5.172,46.609,10.625c15.797,15.813,20.547,36.672,10.625,46.594
		C382.477,186.742,325.258,129.523,335.18,119.585z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M174.086,361.32c-6.453,6.469-16.938,6.469-23.406,0l0,0c-6.469-6.469-6.469-16.938,0-23.406l59.828-59.828
		c6.453-6.469,16.938-6.469,23.406,0l0,0c6.469,6.469,6.469,16.953,0,23.406L174.086,361.32z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M472.836,137.273c3.313-3.313,6.766-6.75,10.406-10.406c25.859-25.859,41.766-85.688,14.672-112.781
		S410.992,2.898,385.133,28.757c-3.656,3.656-7.094,7.094-10.406,10.406L472.836,137.273z"
                  />
                </g>
              </svg>
              <h3 className="text-3xl font-bold text-blue-600">2017</h3>
              </div>
          </div>
        </div>
        <div className="timeline__card">
          <div className="w-full flex items-center flex-nowrap timeline__content">
            <div className="w-1/2 flex items-center justify-center space-x-5">
              <h3 className="text-3xl font-bold text-blue-600">2016</h3>
              <svg
                version="1.1"
                id="_x32_"
                width="40px"
                height="40px"
                viewBox="0 0 512 512"
              >
                <g>
                  <polygon
                    className="fill-blue-600"
                    points="171.57,400.992 145.57,374.976 137.023,366.429 111.023,340.429 55.883,373.164 81.898,399.179 
		112.82,430.102 138.836,456.117 	"
                  />
                  <path
                    className="fill-blue-600"
                    d="M351.227,426.617c-10.859-65.469-22.75-145,50.078-217.813c22.094-22.094,36.969-36.969,53.328-53.328
		l-98.109-98.109c-16.359,16.359-31.234,31.234-53.313,53.328c-72.844,72.828-152.359,60.922-217.828,50.078
		c-55.516-9.188-97.297,35.344-82.313,50.344l116.406,116.391l70.219-70.219c17.922-17.938,47.094-17.938,65.031,0
		c17.922,17.922,17.922,47.094,0,65.016l-70.234,70.234L300.883,508.93C315.867,523.914,360.414,482.133,351.227,426.617z
		 M108.258,264.273l-37.719-37.719l16.906-16.906l37.703,37.719L108.258,264.273z M335.18,119.585
		c9.938-9.922,30.797-5.172,46.609,10.625c15.797,15.813,20.547,36.672,10.625,46.594
		C382.477,186.742,325.258,129.523,335.18,119.585z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M174.086,361.32c-6.453,6.469-16.938,6.469-23.406,0l0,0c-6.469-6.469-6.469-16.938,0-23.406l59.828-59.828
		c6.453-6.469,16.938-6.469,23.406,0l0,0c6.469,6.469,6.469,16.953,0,23.406L174.086,361.32z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M472.836,137.273c3.313-3.313,6.766-6.75,10.406-10.406c25.859-25.859,41.766-85.688,14.672-112.781
		S410.992,2.898,385.133,28.757c-3.656,3.656-7.094,7.094-10.406,10.406L472.836,137.273z"
                  />
                </g>
              </svg>
            </div>
            <div className="w-1/2">
              <h3 className="text-base font-bold text-blue-600">web Designer</h3>
              <p className="text-xs text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit egestas,
                facilisi fusce quis ultrices tincidunt torquent leo.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline__card">
          <div className="w-full flex items-center flex-nowrap timeline__content">            
            <div className="w-1/2">
              <h3 className="flex text-base font-bold text-blue-600">HTML Developer</h3>
              <p className="text-xs text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit egestas,
                facilisi fusce quis ultrices tincidunt torquent leo.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center space-x-5">
              <h3 className="text-3xl font-bold text-blue-600">2014</h3>
              <svg
                version="1.1"
                id="_x32_"
                width="40px"
                height="40px"
                viewBox="0 0 512 512"
              >
                <g>
                  <polygon
                    className="fill-blue-600"
                    points="171.57,400.992 145.57,374.976 137.023,366.429 111.023,340.429 55.883,373.164 81.898,399.179 
		112.82,430.102 138.836,456.117 	"
                  />
                  <path
                    className="fill-blue-600"
                    d="M351.227,426.617c-10.859-65.469-22.75-145,50.078-217.813c22.094-22.094,36.969-36.969,53.328-53.328
		l-98.109-98.109c-16.359,16.359-31.234,31.234-53.313,53.328c-72.844,72.828-152.359,60.922-217.828,50.078
		c-55.516-9.188-97.297,35.344-82.313,50.344l116.406,116.391l70.219-70.219c17.922-17.938,47.094-17.938,65.031,0
		c17.922,17.922,17.922,47.094,0,65.016l-70.234,70.234L300.883,508.93C315.867,523.914,360.414,482.133,351.227,426.617z
		 M108.258,264.273l-37.719-37.719l16.906-16.906l37.703,37.719L108.258,264.273z M335.18,119.585
		c9.938-9.922,30.797-5.172,46.609,10.625c15.797,15.813,20.547,36.672,10.625,46.594
		C382.477,186.742,325.258,129.523,335.18,119.585z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M174.086,361.32c-6.453,6.469-16.938,6.469-23.406,0l0,0c-6.469-6.469-6.469-16.938,0-23.406l59.828-59.828
		c6.453-6.469,16.938-6.469,23.406,0l0,0c6.469,6.469,6.469,16.953,0,23.406L174.086,361.32z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M472.836,137.273c3.313-3.313,6.766-6.75,10.406-10.406c25.859-25.859,41.766-85.688,14.672-112.781
		S410.992,2.898,385.133,28.757c-3.656,3.656-7.094,7.094-10.406,10.406L472.836,137.273z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="timeline__card">
          <div className="w-full flex items-center flex-nowrap timeline__content">
            <div className="w-1/2 flex items-center justify-center space-x-5">
              <h3 className="text-3xl font-bold text-blue-600">2014</h3>
              <svg
                version="1.1"
                id="_x32_"
                width="40px"
                height="40px"
                viewBox="0 0 512 512"
              >
                <g>
                  <polygon
                    className="fill-blue-600"
                    points="171.57,400.992 145.57,374.976 137.023,366.429 111.023,340.429 55.883,373.164 81.898,399.179 
		112.82,430.102 138.836,456.117 	"
                  />
                  <path
                    className="fill-blue-600"
                    d="M351.227,426.617c-10.859-65.469-22.75-145,50.078-217.813c22.094-22.094,36.969-36.969,53.328-53.328
		l-98.109-98.109c-16.359,16.359-31.234,31.234-53.313,53.328c-72.844,72.828-152.359,60.922-217.828,50.078
		c-55.516-9.188-97.297,35.344-82.313,50.344l116.406,116.391l70.219-70.219c17.922-17.938,47.094-17.938,65.031,0
		c17.922,17.922,17.922,47.094,0,65.016l-70.234,70.234L300.883,508.93C315.867,523.914,360.414,482.133,351.227,426.617z
		 M108.258,264.273l-37.719-37.719l16.906-16.906l37.703,37.719L108.258,264.273z M335.18,119.585
		c9.938-9.922,30.797-5.172,46.609,10.625c15.797,15.813,20.547,36.672,10.625,46.594
		C382.477,186.742,325.258,129.523,335.18,119.585z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M174.086,361.32c-6.453,6.469-16.938,6.469-23.406,0l0,0c-6.469-6.469-6.469-16.938,0-23.406l59.828-59.828
		c6.453-6.469,16.938-6.469,23.406,0l0,0c6.469,6.469,6.469,16.953,0,23.406L174.086,361.32z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M472.836,137.273c3.313-3.313,6.766-6.75,10.406-10.406c25.859-25.859,41.766-85.688,14.672-112.781
		S410.992,2.898,385.133,28.757c-3.656,3.656-7.094,7.094-10.406,10.406L472.836,137.273z"
                  />
                </g>
              </svg>
            </div>
            <div className="w-1/2">
              <h3 className="text-base font-bold text-blue-600">HTML Developer</h3>
              <p className="text-xs text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit egestas,
                facilisi fusce quis ultrices tincidunt torquent leo.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline__card">
          <div className="w-full flex items-center flex-nowrap timeline__content">
            <div className="w-1/2 flex flex-col justify-start">
              <h3 className="flex text-base font-bold text-blue-600">Graphic Designer</h3>
              <p className="text-xs text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipiscing elit egestas,
                facilisi fusce quis ultrices tincidunt torquent leo.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center space-x-5">
              <svg
                version="1.1"
                id="_x32_"
                width="40px"
                height="40px"
                viewBox="0 0 512 512"
              >
                <g>
                  <polygon
                    className="fill-blue-600"
                    points="171.57,400.992 145.57,374.976 137.023,366.429 111.023,340.429 55.883,373.164 81.898,399.179 
		112.82,430.102 138.836,456.117 	"
                  />
                  <path
                    className="fill-blue-600"
                    d="M351.227,426.617c-10.859-65.469-22.75-145,50.078-217.813c22.094-22.094,36.969-36.969,53.328-53.328
		l-98.109-98.109c-16.359,16.359-31.234,31.234-53.313,53.328c-72.844,72.828-152.359,60.922-217.828,50.078
		c-55.516-9.188-97.297,35.344-82.313,50.344l116.406,116.391l70.219-70.219c17.922-17.938,47.094-17.938,65.031,0
		c17.922,17.922,17.922,47.094,0,65.016l-70.234,70.234L300.883,508.93C315.867,523.914,360.414,482.133,351.227,426.617z
		 M108.258,264.273l-37.719-37.719l16.906-16.906l37.703,37.719L108.258,264.273z M335.18,119.585
		c9.938-9.922,30.797-5.172,46.609,10.625c15.797,15.813,20.547,36.672,10.625,46.594
		C382.477,186.742,325.258,129.523,335.18,119.585z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M174.086,361.32c-6.453,6.469-16.938,6.469-23.406,0l0,0c-6.469-6.469-6.469-16.938,0-23.406l59.828-59.828
		c6.453-6.469,16.938-6.469,23.406,0l0,0c6.469,6.469,6.469,16.953,0,23.406L174.086,361.32z"
                  />
                  <path
                    className="fill-blue-600"
                    d="M472.836,137.273c3.313-3.313,6.766-6.75,10.406-10.406c25.859-25.859,41.766-85.688,14.672-112.781
		S410.992,2.898,385.133,28.757c-3.656,3.656-7.094,7.094-10.406,10.406L472.836,137.273z"
                  />
                </g>
              </svg>
              <h3 className="text-3xl font-bold text-blue-600">2014</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
