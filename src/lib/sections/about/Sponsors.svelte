<script lang="ts">
        import Panel from "$lib/components/visual/Panel.svelte";
        import { PiggyBankIcon, CopyIcon, CheckIcon, MapPinIcon, PhoneIcon } from "lucide-svelte";
        import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, LINKEDIN_URL } from "$lib/util/consts";
        import { error } from "$lib/util/logger";
        import { m } from "$lib/paraglide/messages";
        import { ToastManager } from "$lib/util/toast.svelte";

        let copied = false;
        let timeoutId: NodeJS.Timeout | null = null;

        function copyToClipboard() {
                try {
                        navigator.clipboard.writeText(CONTACT_EMAIL);
                        copied = true;
                        ToastManager.add({
                                type: "success",
                                message: m["about.sponsors.email_copied"](),
                        });

                        if (timeoutId) clearTimeout(timeoutId);
                        timeoutId = setTimeout(() => (copied = false), 2000);
                } catch (err) {
                        error(`Failed to copy email: ${err}`);
                }
        }
</script>

<Panel class="flex flex-col gap-4 p-6">
        <h2 class="text-2xl font-bold flex items-center">
                <div
                        class="rounded-full bg-accent-orange p-2 inline-block mr-3 w-10 h-10"
                        style="box-shadow: 0 0 15px hsla(25, 100%, 50%, 0.4);"
                >
                        <PiggyBankIcon color="black" />
                </div>
                {m["about.sponsors.title"]()}
        </h2>
        
        <div class="flex flex-col gap-3">
                <!-- Location -->
                <div class="flex items-center gap-2 text-muted">
                        <MapPinIcon size="18" class="text-accent" />
                        <span>{CONTACT_ADDRESS}</span>
                </div>
                
                <!-- Phone -->
                <div class="flex items-center gap-2 text-muted">
                        <PhoneIcon size="18" class="text-accent" />
                        <a href="tel:{CONTACT_PHONE}" class="hover:text-accent transition-colors">
                                {CONTACT_PHONE}
                        </a>
                </div>
                
                <!-- Email -->
                <p class="text-muted mt-2">
                        {m["about.sponsors.description"]()} 
                        <span class="inline-block mx-[2px] relative top-[2px]">
                                <button
                                        id="email"
                                        class="flex items-center gap-[6px] cursor-pointer"
                                        onclick={copyToClipboard}
                                        aria-label="Copy email to clipboard"
                                >
                                        {#if copied}
                                                <CheckIcon size="14"></CheckIcon>
                                        {:else}
                                                <CopyIcon size="14"></CopyIcon>
                                        {/if}
                                        {CONTACT_EMAIL}
                                </button>
                        </span> 
                        or 
                        <a href={LINKEDIN_URL} target="_blank" class="text-accent hover:underline">LinkedIn</a>!
                </p>
        </div>
</Panel>

<style lang="postcss">
        #email {
                @apply font-mono bg-gray-200 rounded-md px-1 text-inherit no-underline dynadark:bg-panel-alt dynadark:text-white;
        }

        #email:hover {
                @apply font-mono !bg-accent !text-black rounded-md px-1 duration-200;
        }
</style>
