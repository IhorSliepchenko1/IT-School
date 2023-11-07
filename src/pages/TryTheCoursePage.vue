<template>
    <div data-aos="fade-up" data-aos-duration="1000" class="course-form ">

        <h1 class="course-form__title">Fill out the form</h1>


        <form class="course-form__form" @submit.prevent="submitForm">
            <div class="course-form__firstName">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" v-model="formData.firstName" required placeholder="Igor">
            </div>
            <div class="course-form__lastName">
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" v-model="formData.lastName" required placeholder="Slepchenko">
            </div>


            <div class="course-form__dob">
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" v-model="formData.dob" required >
            </div>

            <div class="course-form__phone">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" v-model="formData.phone" @input="restrictInput" required
                    placeholder="380__ ___ __ __">
            </div>


            <div class="course-form__email">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required placeholder="anon@anon.com">>
            </div>


            <div class="course-form__list">
                <label for="itDirection">Select a direction in IT:</label>
                <select id="itDirection" v-model="formData.itDirection" required>
                    <option value="">-</option>
                    <option value="Front-end developer<">Front-end developer</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="DevOps">DevOps</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Blockchain">Blockchain</option>
                </select>
            </div>
            <div class="course-form__about">
                <label for="about">Tell me about yourself:</label>
                <textarea id="about" v-model="formData.about" rows="4" maxlength="250"
                    placeholder="A couple sentences about yourself"></textarea>
            </div>


            <v-btn class="course-form__btn" type="submit">Submit</v-btn>

        </form>

        <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-card-title>
                    Form submitted successfully!
                </v-card-title>
                <v-card-actions>
                    <v-btn color="primary" @click="clearForm">OK</v-btn>
                    <v-btn color="primary" @click="editForm">Edit</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>




    </div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                lastName: '',
                firstName: '',
                dob: '',
                startDate: '',
                email: '',
                phone: '',
                itDirection: '',
                about: ''
            },
            dialog: false
        };
    },

    methods: {
        restrictInput() {
            this.formData.phone = this.formData.phone.replace(/\D/g, '').substring(0, 12);
        },
        submitForm() {
            console.log(this.formData);
            this.dialog = true;
        },
        editForm() {
            this.dialog = false;
        },
        clearForm() {
            this.dialog = false;
            this.formData = {
                lastName: '',
                firstName: '',
                dob: '',
                startDate: '',
                email: '',
                phone: '',
                itDirection: '',
                about: ''
            };
        },
    }

}
</script>
  

<style lang="scss">

// modal
.v-dialog {
    align-items: flex-start;
    padding-top: 270rem;
}

.v-dialog.v-dialog--active {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.v-card {
    max-width: 500px;
    max-height: 200px;
    text-align: center;
    padding: 10px;
}

.v-card-title {
    font-size: 30rem;
    padding: 50rem;
}

.v-card-actions {
    justify-content: end;
    padding: 10px;
}

.v-card-actions {
    display: flex;
    justify-content: space-between;
}
</style>
