<template>
  <div class="card-header">
    <button
      type="button"
      class="btn btn-info float-right"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Create Category
    </button>
  </div>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <form @submit.prevent="save_category">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div v-for="(category, key) in categories" :key="key">
                <div class="row">
                  <div class="col-md-10">
                    <label for="name" class="form-label">Name</label><br />
                    <!-- name: {{ category.name }} , Key: {{ key }} , length: {{ categories.length-1 }} -->
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Category Name"
                      v-model="category.name"
                    />
                  </div>
                  <div class="col-md-2" style="padding-top: 2.15rem !important">
                    <button
                      class="btn btn-success btn-sm"
                      @click.prevent="addRow(key)"
                      v-show="key === categories.length - 1"
                    >
                      +
                    </button>
                    &nbsp;
                    <button
                      class="btn btn-danger btn-sm"
                      @click.prevent="removeRow(key)"
                      v-show="key || (!key && categories.length > 1)"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [
        {
          name: "",
        },
      ],
    };
  },


  methods: {
    addRow(key) {
      this.categories.push({
        name: "",
      });
    },
    removeRow(key) {
      this.categories.splice(key, 1);
    },

    async save_category(){
      await axios.post("http://localhost/vue-spa/laravel-app/api/save-category", {data:this.categories})
      .then( (response)=>{
        console.log(response.data)
      } )
      .catch((error)=>{
        console.log(error)
      })
    }
  },
};
</script>
