class Appointments {
    constructor(){
        this.appointments = []
        this.adapter = new AppointmentsAdapter()
        this.initBindEventListners() 
        this.fetchAndLoadAppointments()
    }

    initBindEventListners() {
        this.appointmentsContainer = document.querySelector(".appointments_container")
        this.appointmentList = document.querySelector(".appointment_list")
        this.appointmentNameInput = document.getElementById('appointment_name_form')
        this.appointmentForm = document.querySelector('.appointment_form')
        
        // this.startTimeForm = document.querySelector('.start_time_form')
        // this.endTimeForm = document.querySelector('.end_time_form')
        // this.appointmentNameForm = addEventListener('submit', this.createAppointment) 
        this.appointmentForm = addEventListener('submit', this.createAppointment.bind(this))
                                                //binding the "this" inside Create appointments to the Appointments Class
        this.appointmentList.addEventListener('dblclick', this.handleAppointmentClick.bind(this))  
        this.appointmentList.addEventListener('blur', this.updateAppointment.bind(this), true)                                       
    }

    createAppointment(e) {
        e.preventDefault() 
        //default is to refresh page on submit
      const value = this.appointmentNameInput.value 
       
      this.adapter.createAppointment(value).then(appointment => {
          this.appointments.push(new Appointment(appointment))
          this.appointmentNameInput.value = '' //is this necessary?
          this.render() //is this necessary?
      })
    }

    handleAppointmentClick(e) { 
       this.toggleAppointment(e)
    }

    toggleAppointment(e){
        const li = e.target 
        li.contentEditable  = true 
        li.focus()
        li.classList.add('editable')
         //    classList.add  allows target to access css editable class
    }

    updateAppointment(e){
        const li = e.target 
        li.contentEditable  = false
        li.classList.remove('editable') //remove padding when clicked away from li taget 
        const newValue = li.innerHTML
        const id = li.dataset.id
        this.adapter.updateAppointment(newValue, id)   

    }

    fetchAndLoadAppointments() {
        this.adapter.getAppointments()
        .then(appointments => {
            appointments.forEach(appointment => this.appointments.push(new Appointment(appointment))) 
                                               // pushes new appointment instanance into appointments array 
        })
        .then(() => {
            this.render()
        })
    }

    render() {
        this.appointmentList.innerHTML = this.appointments.map(appointment => appointment.renderLi()).join('') 
                                                        //use map to iterate over appointments
    }

}
///uses adapter to fetch appointment from api 