const users = {
    daniel: { name: 'Daniel' },
    chris: { name: 'Chris' },
    zack: { name: 'Zack' },
    carlo: { name: 'Carlo'}
  }
  const events = [
    { 
      name: 'Monster Truck Rally',
      description: 'VROOM', 
      attendees: [users.daniel, users.chris]
    },
    { 
      name: 'Cat Café',  
      description: 'MEOW', 
      attendees: [users.carlo, users.daniel, users.zack, users.chris]
    },
    { 
      name: 'Atomic Pinball', 
      description: 'TILT', 
      attendees: [users.chris, users.zack, users.carlo] 
    },
    { 
      name: 'Breakdancing Museum', 
      description: 'SPIN', 
      attendees: [ users.zack, users.daniel] 
    }
  ]