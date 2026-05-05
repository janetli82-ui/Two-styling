const VideoContainer = () => {
  return(
    <div className="flex justify-center items-center px-4 py-10 flex-1">
      <video src="./tea.mp4" muted controls autoPlay loop className="w-full max-w-sm"></video>
    </div>
  )
}

export default VideoContainer