<script lang="ts">
        import Panel from "$lib/components/visual/Panel.svelte";
        import { CONTACT_EMAIL, GITHUB_URL_PROJECT, LINKEDIN_URL, COMPANY_WEBSITE } from "$lib/util/consts";
        import { effects } from "$lib/store/index.svelte";
        import {
                GithubIcon,
                LinkIcon,
                MailIcon,
                LinkedinIcon,
                GlobeIcon,
        } from "lucide-svelte";
        import { m } from "$lib/paraglide/messages";
</script>

<Panel class="flex flex-col gap-4 p-6">
        <h2 class="text-2xl font-bold flex items-center">
                <div
                        class="rounded-full bg-accent-orange p-2 inline-block mr-3 w-10 h-10"
                        style="box-shadow: 0 0 15px hsla(25, 100%, 50%, 0.4);"
                >
                        <LinkIcon color="black" />
                </div>
                {m["about.resources.title"]()}
        </h2>
        
        <!-- Contact Info -->
        <div class="flex flex-col gap-2 text-sm text-muted mb-2">
                <p><strong>Email:</strong> {CONTACT_EMAIL}</p>
                <p><strong>Location:</strong> Yaoundé, Cameroon</p>
        </div>
        
        <!-- Action Buttons -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <a
                        href={GITHUB_URL_PROJECT}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn {$effects
                                ? ''
                                : '!scale-100'} flex-1 gap-2 p-3 rounded-full bg-button text-black dynadark:text-white flex items-center justify-center text-sm"
                >
                        <GithubIcon size="20" class="inline-block mr-1" />
                        {m["about.resources.source"]()}
                </a>
                <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn {$effects
                                ? ''
                                : '!scale-100'} flex-1 gap-2 p-3 rounded-full bg-button text-black dynadark:text-white flex items-center justify-center text-sm"
                >
                        <LinkedinIcon size="20" class="inline-block mr-1" />
                        {m["about.resources.linkedin"]()}
                </a>
                <a
                        href="mailto:{CONTACT_EMAIL}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn {$effects
                                ? ''
                                : '!scale-100'} flex-1 gap-2 p-3 rounded-full bg-button text-black dynadark:text-white flex items-center justify-center text-sm"
                >
                        <MailIcon size="20" class="inline-block mr-1" />
                        {m["about.resources.email"]()}
                </a>
                <a
                        href={COMPANY_WEBSITE}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn {$effects
                                ? ''
                                : '!scale-100'} flex-1 gap-2 p-3 rounded-full bg-button text-black dynadark:text-white flex items-center justify-center text-sm"
                >
                        <GlobeIcon size="20" class="inline-block mr-1" />
                        {m["about.resources.website"]()}
                </a>
        </div>
</Panel>
