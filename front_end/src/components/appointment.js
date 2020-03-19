class Appointment {
    constructor(appointmentJSON) {
        this.id = appointmentJSON.id  
        this.name = appointmentJSON.name
    }

    renderLi() {
        return `<li data-id=${this.id}>${this.name}</li>`
    }
}