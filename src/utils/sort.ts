export default class Sort{
    static sortHoursAvailable(arrayHoursAvailable){
        const arrayHoursAvailabeSorted = arrayHoursAvailable.sort(Sort.compareHoursAvailable)
        return arrayHoursAvailabeSorted
    }

    static compareHoursAvailable(a, b) {
        const currentDate = new Date();
        const currentDateFormated = `${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDay()} `;
        var atime = Date.parse(currentDateFormated + a.hour);
        var btime = Date.parse(currentDateFormated + b.hour);
      
        if (atime < btime) {
          return -1;
        }
      
        if (atime > btime) {
          return 1;
        }
      
        return 0;
      }
}