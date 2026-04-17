<script lang="ts">
        import Panel from "$lib/components/visual/Panel.svelte";
        import { HeartHandshakeIcon, ExternalLinkIcon } from "lucide-svelte";
        import { 
                FOUNDER_NAME, 
                COMPANY_NAME, 
                COMPANY_WEBSITE, 
                LINKEDIN_URL, 
                GITHUB_URL_PROJECT 
        } from "$lib/util/consts";
        import { m } from "$lib/paraglide/messages";
        import { link, sanitize } from "$lib/store/index.svelte";
</script>

<Panel class="flex flex-col gap-6 p-6">
        <h2 class="text-2xl font-bold flex items-center">
                <div 
                        class="rounded-full bg-accent-orange p-2 inline-block mr-3 w-10 h-10"
                        style="box-shadow: 0 0 15px hsla(25, 100%, 50%, 0.4);"
                >
                        <HeartHandshakeIcon color="black" />
                </div>
                {m["about.credits.title"]()}
        </h2>

        <!-- About CYBER WEB -->
        <div class="flex flex-col gap-4">
                <h3 class="text-lg font-bold text-accent">
                        {m["about.credits.notable_contributors"]()}
                </h3>
                <p class="text-base text-muted font-normal">
                        {m["about.credits.notable_description"]()}
                </p>
                
                <!-- Founder Info -->
                <div class="flex items-center gap-4 p-4 bg-panel-highlight rounded-xl border border-separator">
                        <div class="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-black">
                                M
                        </div>
                        <div class="flex flex-col">
                                <p class="font-semibold text-lg">{FOUNDER_NAME}</p>
                                <p class="text-sm text-muted">{m["about.credits.roles.lead_developer"]()}</p>
                                <a 
                                        href={LINKEDIN_URL} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        class="text-sm text-accent hover:underline flex items-center gap-1 mt-1"
                                >
                                        LinkedIn <ExternalLinkIcon size="14" />
                                </a>
                        </div>
                </div>
        </div>

        <!-- CYBER WEB Services -->
        <div class="flex flex-col gap-3">
                <h3 class="font-bold">CYBER WEB Services</h3>
                <ul class="text-sm text-muted flex flex-col gap-1 list-disc list-inside">
                        <li>AI Automation & Intelligent Systems</li>
                        <li>Custom Software Development</li>
                        <li>Digital Marketing & SEO</li>
                        <li>Cybersecurity Solutions</li>
                        <li>Hardware Maintenance</li>
                        <li>IT Training & Mentorship</li>
                </ul>
                <a 
                        href={COMPANY_WEBSITE} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="btn highlight mt-2 text-sm py-2"
                >
                        Visit CYBER WEB <ExternalLinkIcon size="16" class="ml-2" />
                </a>
        </div>

        <!-- Libraries -->
        <div class="flex flex-col gap-2">
                <h3 class="font-bold">{m["about.credits.libraries"]()}</h3>
                <p class="text-sm text-muted font-normal">
                        {m["about.credits.libraries_description"]()}
                </p>
        </div>

        <!-- GitHub Link -->
        <div class="pt-2 border-t border-separator">
                <p class="text-sm text-muted">
                        {@html sanitize(
                                link(
                                        "github_link",
                                        m["about.credits.github_description"](),
                                        GITHUB_URL_PROJECT,
                                        true,
                                ),
                        )}
                </p>
        </div>
</Panel>
