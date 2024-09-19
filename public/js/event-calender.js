// Calender js S
const resources = [
    { id: 1, title: 'Mon' }, { id: 2, title: 'Tue' }, { id: 3, title: 'Wed'}, { id: 3, title: 'Thus'}, { id: 3, title: 'Fri'}, { id: 3, title: 'Sat'}, { id: 3, title: 'Sun'}
  ];
  
  function createDate(hours, minutes) {
    const now = new Date();
    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(0);
    return now;
  }
  
  const events = [{
    id: 1,
    resourceIds: [1],
    start: createDate(9, 0),
    end: createDate(10, 30),
    title: '1:1 sessions',
    editable: true,
  // },
  //  {
  //   id: 2,
  //   resourceIds: [2],
  //   start: createDate(11, 0),
  //   end: createDate(13, 30),
  //   title: 'Uneditable Event',
  //   // editable: false, // not work
  //   startEditable: false,
  //   durationEditable: false,
  //   backgroundColor: 'red',
  }];
  
  function getOverlappingEvents(event) {
    // select event has event.resource.id
    // eventDrop event has event.resourceIds
    const rId = event.resource ? event.resource.id : event.resourceIds[0];
    return ec.getEvents().filter(e => e.resourceIds[0] == rId && e.start < event.end && event.start < e.end);
  }
  
  function hasOverlappingEvents(event) {
    return getOverlappingEvents(event).length > 0;
  }
  
  function hasOtherOverlappingEvents(event) {
    return getOverlappingEvents(event).filter(e => e.id != event.id).length > 0
  }
  
  const ec = new EventCalendar(document.getElementById('ec'), {
    resources,
    events,
    view: 'resourceTimeGridDay',
    allDaySlot: false,
    slotMinTime: '07:00:00',
    slotMaxTime: '19:00:00',
    nowIndicator: true,
    selectable: true,
    select: function(event) {
      if (hasOverlappingEvents(event)) {
        ec.unselect();
        return;
      }
      showModal(event);
    },
    eventDrop: function ({ event, revert }) {
      if (hasOtherOverlappingEvents(event)) revert();
    },
    eventResize: function ({ event, revert }) {
      if (hasOtherOverlappingEvents(event)) revert();
    },
    datesSet: function ({ start }) {
      toggleDateButtonsFor7Days(start);
    },
    eventClick: function ({ event }) {
      showModal(event);
    },
    headerToolbar : {
      start: 'title', center: '', end: 'today,prev,next'},
    titleFormat : function(start, end) {
      const s = `${start.getDate()} / ${start.getMonth() + 1} / ${start.getFullYear()}`;
      return {html: s};
    }
  });
        
  
  function toggleDateButtonsFor7Days(start) {
    const next = document.querySelector('.ec-next');
    const prev = document.querySelector('.ec-prev');
    const now = dayjs();
    const targetDate = dayjs(start);
    prev.disabled = targetDate.isBefore(now);
    next.disabled = targetDate.isAfter(now.add(6, 'day'));  
  }
  
  function addEvent(event) {
    if (event.id) {
      ec.updateEvent(event);
      return;
    }
    event.id = new Date().getTime();
    event.resourceIds = [ event.resource.id ];
    ec.addEvent(event);
    ec.unselect();
  }
  
  // Calender js E