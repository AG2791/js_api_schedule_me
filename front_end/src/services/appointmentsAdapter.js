class  AppointmentsAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/appointments"
        // this.appointments = baseUrl('/api/v1/appointments')
    }


    getAppointments() {
        return fetch(this.baseUrl).then(res => res.json() )
    }

    createAppointment(value) {
        const appointment = {
            name: value,
        }

        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify({appointment: appointment }),
        })
        .then(res => res.json())
    }


    updateAppointment(value, id) {
        const appointment = {
            name: value,
        }
        return fetch(`${this.baseUrl}/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify({appointment: appointment }),
        }).then(res => res.json())

    }
}



////getAppointments acts somewhat like an instance method. 
///It can be used to call instances of appointments

 
// let appointmentsAdapter = new AppointmentsAdapter()

//  let appointments = appointmentsAdapter.getAppointments()

