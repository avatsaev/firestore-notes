
# Code snippets:

### Step 2

Note Item Component:  

HTML: 

```
<div class="card">
    <header class="card-header">
        <span class="card-header-title">
        </span>
    </header>
    <div class="card-content">
        <div class="content">
        </div>
    </div>
    <footer class="card-footer">
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
    </footer>
</div>
```

CSS:

```
.card {
    margin-bottom: 10px;
    animation: fadein 400ms;
} 
  
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

### Step 4

Note From Component:  

HTML: 

```
 <div class="note-form is-clearfix">

    <div class="field">
        <label class="label">Title</label>
        <div class="control">
            <input class="input" placeholder="Note title...">
        </div>
    </div>

    <div class="field">
        <label class="label">Message</label>
        <div class="control">
            <textarea class="textarea" placeholder="Note contents..."></textarea>
        </div>
    </div>

    <div class="field is-grouped is-pulled-right">
        <div class="control">
            <button class="button is-danger" >Cancel</button>
        </div>
        <div class="control">
            <button class="button is-success">Submit</button>
        </div>

    </div>
</div>

```

CSS:

```
.note-form{
    margin-bottom: 10px;
    padding: 20px;
    background-color: whitesmoke;
    border-radius: 10px;
    animation: fadein 400ms;
}


@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
```
