<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep theme resolution in a pure helper and browser synchronization in a hook; this preserves SSR-safe rendering and makes saved/system preference rules testable.
- Keep the decorative scroll score in its own fixed, pointer-inert component with reduced-motion support; scroll updates must not rerender page content.
- Render the single main landmark around the root Outlet and place the Home skip-link target after its header; this avoids duplicate landmarks while skipping navigation.
