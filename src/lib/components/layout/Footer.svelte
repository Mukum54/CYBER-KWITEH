<script lang="ts">
        import { GITHUB_URL_PROJECT, LINKEDIN_URL, COMPANY_WEBSITE } from "$lib/util/consts";
        import { m } from "$lib/paraglide/messages";

        const commitHash =
                __COMMIT_HASH__ && __COMMIT_HASH__ !== "unknown"
                        ? __COMMIT_HASH__
                        : null;

        const year = new Date().getFullYear();
</script>

<footer
        class="hidden md:block w-full h-14 border-t border-separator fixed bottom-0 mt-12"
>
        <div
                class="w-full h-full flex items-center justify-center text-muted gap-3 relative"
        >
                <p>{m["footer.copyright"]({ year })}</p>
                <p>•</p>
                <a
                        class="hover:underline font-normal"
                        href={GITHUB_URL_PROJECT}
                        target="_blank"
                >
                        GitHub
                </a>
                <p>•</p>
                <a
                        class="hover:underline font-normal"
                        href={LINKEDIN_URL}
                        target="_blank"
                >
                        LinkedIn
                </a>
                <p>•</p>
                <a
                        class="hover:underline font-normal"
                        href={COMPANY_WEBSITE}
                        target="_blank"
                >
                        CYBER WEB
                </a>
                <p>•</p>
                <a
                        class="hover:underline font-normal"
                        href="/privacy/"
                >
                        {m["footer.privacy_policy"]()}
                </a>
                {#if commitHash}
                        <p>•</p>
                        <a
                                class="hover:underline font-normal"
                                href="{GITHUB_URL_PROJECT}/commit/{commitHash}"
                                target="_blank"
                        >
                                {commitHash}
                        </a>
                {/if}
        </div>

        <div
                class="absolute bottom-0 left-0 w-full h-24 -z-10 pointer-events-none"
                style="background: linear-gradient(to bottom, transparent, var(--bg) 100%)"
        ></div>
</footer>
