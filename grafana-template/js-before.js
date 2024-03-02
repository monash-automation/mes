handlebars.registerHelper("progress", function (x) {
    let progress = parseFloat(x) * 100;
    return progress.toFixed(2);
  });
  
  
  handlebars.registerHelper("temp", function (x) {
    let t = parseFloat(x);
    return t.toFixed(0);
  });
  
  
  handlebars.registerHelper("estimateTime", function (timeLeft) {
    const currentTime = new Date();
    const completionTime = new Date(currentTime.getTime() + timeLeft * 1000);
    return completionTime.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  });
  
  handlebars.registerHelper('nozzleTempColor', function (value) {
    if (value >= 0 && value <= 100) {
      return 'green';
    } else if (value > 100 && value <= 230) {
      return 'yellow';
    } else if (value > 230) {
      return 'red';
    } else return 'grey'
  });
  
  handlebars.registerHelper('bedTempColor', function (value) {
    if (value >= 0 && value <= 30) {
      return 'green';
    } else if (value > 30 && value <= 60) {
      return 'yellow';
    } else if (value > 60) {
      return 'red';
    } else return 'grey'
  });