

function Home() {
  return (
<div class="row">
<div class="col-4">
<nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
<nav class="nav nav-pills flex-column">
<a class="nav-link" href="#item-1">Fabrics</a>
<nav class="nav nav-pills flex-column">
<a class="nav-link ms-3 my-1" href="#item-1-1">Dyes</a>
<a class="nav-link ms-3 my-1" href="#item-1-2">Reducing waste</a>
</nav>
      <a class="nav-link" href="#item-2">Vendor facilities</a>
      <a class="nav-link" href="#item-3">Prints</a>
      <nav class="nav nav-pills flex-column">
        <a class="nav-link ms-3 my-1" href="#item-3-1">FSC certified </a>
        <a class="nav-link ms-3 my-1" href="#item-3-2">GOTS Standard</a>
      </nav>
    </nav>
  </nav>
</div>

<div class="col-8">
  <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
    <div id="item-1">
      <h4>👗👚Fabrics</h4>
      <p>You can create a better future by choosing to support clothing.
    Know more about what makes us a conscious brand.<br></br>
    Our fabrics are all natural fibre based and biodegradable. <br></br>
    Most of our pieces can be discarded in your compost pile after their lifecycle.</p>
    </div>
    <div id="item-1-1">
      <h5>Dyes</h5>
      <p>We use safe dyes that are AZO free.</p>
    </div>
    <div id="item-1-2">
      <h5>Reducing waste</h5>
      <p>Our clothes are made for many wears, to make memories in and to share with others.
         Thus, reducing waste!</p>
    </div>
    <div id="item-2">
      <h4>Vendor facilities</h4>
      <p>The fabric scraps are repurposed to make hair bands and potli bags rather than simply being discarded.
      Our vendor facilities are fully compliant and every product is screened through a needle detector machine
      </p>
    </div>
    <div id="item-3">
      <h4> Prints</h4>
      <p>And the prints! Our prints are created just for you. 
        They are beautiful, of course, but they are also designed to spark ideas and tell new stories.
        With every garment, we give you a seed ball. 
        water it, give it some sunshine. Watch in wonder and grow your own garden.</p>
    </div>
    <div id="item-3-1">
      <h5>FSC certified </h5>
      <p>Our fabrics are pre-washed and dried to eliminate shrinkage.
      Our garment tags are made from FSC certified paper.
      </p>
    </div>
    <div id="item-3-2">
      <h5>GOTS Standard</h5>
      <p>Our metal trims are nickel-free and safe.
      Our garments have plastic-free buttons.
      Our Organic Tee range is made from Global Organic Textile Standard (GOTS) certified yarn.
      </p>
    </div>
  </div>
</div>
</div>  
    );
  }
  
  export default Home;