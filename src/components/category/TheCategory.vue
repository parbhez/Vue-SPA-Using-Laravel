<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Category</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Layout</a></li>
              <li class="breadcrumb-item active">Collapsed Sidebar</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row mt-4">
          <div class="col-12">
            <div class="card">

                <!-- /.Modal Start-->
              <CreateCategory></CreateCategory>
               <!-- /.Modal End-->


              <div class="card-body">
                <div class="float-left">
                  <select class="form-control selectric">
                    <option>Action For Selected</option>
                    <option>Move to Draft</option>
                    <option>Move to Pending</option>
                    <option>Delete Pemanently</option>
                  </select>
                </div>

                <div class="float-right">
                  <form>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="clearfix mb-3"></div>

                <div class="table-responsive">
                  <table class="table table-striped">
                    <tr>
                      <th class="text-center pt-2">
                        <div
                          class="custom-checkbox custom-checkbox-table custom-control"
                        >
                          <input
                            type="checkbox"
                            data-checkboxes="mygroup"
                            data-checkbox-role="dad"
                            class="custom-control-input"
                            id="checkbox-all"
                          />
                          <label for="checkbox-all" class="custom-control-label"
                            >&nbsp;</label
                          >
                        </div>
                      </th>
                      <th>Category</th>
                      <th>Status</th>
                    </tr>
                    <tr>
                      <td>
                        <div class="custom-checkbox custom-control">
                          <input
                            type="checkbox"
                            data-checkboxes="mygroup"
                            class="custom-control-input"
                            id="checkbox-2"
                          />
                          <label for="checkbox-2" class="custom-control-label"
                            >&nbsp;</label
                          >
                        </div>
                      </td>

                      <td>
                        <a href="#">Web Developer</a>,
                        <a href="#">Tutorial</a>
                      </td>

                      <td>
                        <div class="badge badge-primary">Published</div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="float-right">
                  <nav>
                    <ul class="pagination">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span class="sr-only">Previous</span>
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
  import axios from "axios";
  import CreateCategory from './CreateCategory.vue';
  export default {
    components:{
      CreateCategory
    },

    data(){
      return {

      }
    },

    mounted(){
      this.get_category();
    },

    methods:{
      async get_category(){
      await axios.get("http://localhost/vue-spa/laravel-app/api/category")
      .then( (response)=>{
        console.log(response.data)
      } )
      .catch((error)=>{
        console.log(error)
      })
    }
    }
    
  }
</script>