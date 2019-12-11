# linkable-js

Make every HTML Element a link by setting its class to `linkable`.

## Example

```html
<div class="linkable" data-href="https://shaack.com">
    This will link to shaack.com
</div>
<script src="src/linkable.js"></script>
```
The div ist now clickable, has `cursor="pointer"` and links to
shaack.com.

## install


Use npm:
```
npm install -save linkable-js
```

Or just download this repository.

## use

Just include the script `linkable.js`.
```html
<script src="/node_modules/linkable-js/src/linkable.js"></script>
```
Now all elements with `class="linkable"` are links to their
`data-href` attribute. 
