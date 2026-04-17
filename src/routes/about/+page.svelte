<script lang="ts">
        import * as About from "$lib/sections/about";
        import { InfoIcon } from "lucide-svelte";
        import { FOUNDER_NAME, COMPANY_NAME, COMPANY_WEBSITE, LINKEDIN_URL, GITHUB_URL_PROJECT } from "$lib/util/consts";
        import { PUB_DONATION_URL, PUB_STRIPE_KEY } from "$env/static/public";
        import { DISABLE_ALL_EXTERNAL_REQUESTS } from "$lib/util/consts";
        import { m } from "$lib/paraglide/messages";
</script>

<div class="flex flex-col h-full items-center">
        <h1 class="hidden md:block text-[40px] tracking-tight leading-[72px] mb-6">
                <InfoIcon size="40" class="inline-block -mt-2 mr-2 text-accent" />
                {m["about.title"]()}
        </h1>

        <div
                class="w-full max-w-[1280px] flex flex-col md:flex-row gap-4 p-4 md:px-4 md:py-0"
        >
                <!-- Why CYBER KWITEH? & Contact -->
                <div class="flex flex-col gap-4 flex-1">
                        <About.Why />
                        <About.Sponsors />
                </div>

                <!-- Resources & Credits -->
                <div class="flex flex-col gap-4 flex-1">
                        <About.Resources />
                        <About.Credits />
                </div>
        </div>
</div>
