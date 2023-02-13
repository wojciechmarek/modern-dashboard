<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Dashboard from '../Features/Dashboard/Dashboard.svelte';
  import Employees from '../Features/Employees/Employees.svelte';
  import Navbar from '../Features/Navbar/Navbar.svelte';
  import Projects from '../Features/Projects/Projects.svelte';

  let url = '';
</script>

<Router {url}>
  <Navbar />
  <main class="h-[calc(100%-5em)]">
    <!-- <Route path="blog/:id" component={BlogPost} /> -->
    <Route path="employees" component={Employees} />
    <Route path="projects" component={Projects} />
    <Route path="/"><Dashboard /></Route>
  </main>
</Router>
