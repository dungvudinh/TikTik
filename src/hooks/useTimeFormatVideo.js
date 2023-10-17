function useTimeFormatVideo(duration) {
    var timeFormat = null;
    if(duration < 60)
        {
            const time = Math.floor(duration)
            if( time < 10)
                timeFormat = `00:0${time}`;
            else 
                timeFormat = `00:${time}`;
        }
    else 
    {
        let minute = Math.floor(duration/60);
        let second  = Math.floor(duration - (minute*60));
        if(minute < 10 && second < 10)
            timeFormat = `0${minute}:0${second}`;
        else if(minute < 10 && second >=10)
            timeFormat = `0${minute}:${second}`;
        else if(minute > 10 && second < 10)
            timeFormat = `${minute}:0${second}`;
        else 
            timeFormat = `${minute}:${second}`;
    }
    return timeFormat;
}

export default useTimeFormatVideo;