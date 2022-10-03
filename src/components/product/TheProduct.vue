<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Product</h1>
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
              <!-- /.Create Modal Start-->
              <div class="card-header">
                <button
                  type="button"
                  class="btn btn-info float-right"
                  data-toggle="modal"
                  data-target="#addProduct"
                >
                  Add Product
                </button>
              </div>
              <CreateProduct
                :product="product"
                @addProduct="addProduct()"
                :category="category"
                :modalId="modalId"
              ></CreateProduct>
              <!-- /.Create Modal End-->

              {{ allProducts.length }}
              <div class="card-body">
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
                      <th>Product</th>
                      <th>Status</th>
                    </tr>
                    <tr v-for="(product, key) in allProducts" :key="key">
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
                        {{ product.name }}
                      </td>

                      <td>
                        <div class="badge badge-primary">
                          {{ product.status == 1 ? "Published" : "Draft" }}
                        </div>
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
import CreateProduct from "./CreateProduct.vue";
export default {
  components: {
    CreateProduct,
  },

  data() {
    return {
      product: {
        title: "Add Category (Parent Child Relation using props nad $emit)",
      },
      allProducts: [],

      category: {
        category_name: "",
      },
    };
  },

  mounted() {
    this.get_all_product();
  },

  methods: {
    get_all_product() {
      axios
        .get("http://localhost/vue-spa/laravel-app/api/category")
        .then((response) => {
          console.log(response.data);
          this.allProducts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addProduct() {
      axios
        .post(
          "http://localhost/vue-spa/laravel-app/api/store-category",
          this.category
        )
        .then((response) => {
          $("#addProduct").modal("hide");
          this.get_all_product();
          this.resetForm();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    resetForm() {
      this.category = {
        category_name: "",
      };
    },
  },
};
</script>
