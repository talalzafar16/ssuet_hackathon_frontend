// @ts-expect-error j
const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short' };
    // @ts-expect-error j
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };
  
  const getDateRanges = () => {
    const currentDate = new Date();
    const dateRanges = [];
  
    for (let i = 0; i < 4; i++) {
      const startDate = new Date(currentDate);
      startDate.setDate(currentDate.getDate() + (i * 4)); 
  
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 3); 
  
      const startFormatted = formatDate(startDate);
      const endFormatted = formatDate(endDate);
  
      dateRanges.push({
        id: i + 1,
        label: `${startFormatted} - ${endFormatted}`,
        start: startDate.toISOString().split('T')[0], 
        end: endDate.toISOString().split('T')[0], 
      });
    }
  
    return dateRanges;
  };
  export default getDateRanges