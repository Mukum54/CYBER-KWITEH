<script lang="ts">
        import Panel from "$lib/components/visual/Panel.svelte";
        import { MessageCircleQuestionIcon, ZapIcon, ShieldIcon, CpuIcon } from "lucide-svelte";
        import { m } from "$lib/paraglide/messages";
        import { sanitize } from "$lib/store/index.svelte";
        import { COMPANY_NAME, FOUNDER_NAME, COMPANY_WEBSITE } from "$lib/util/consts";
</script>

<Panel class="flex flex-col gap-4 p-6">
        <h2 class="text-2xl font-bold flex items-center">
                <div
                        class="rounded-full bg-accent-orange p-2 inline-block mr-3 w-10 h-10"
                        style="box-shadow: 0 0 15px hsla(25, 100%, 50%, 0.4);"
                >
                        <MessageCircleQuestionIcon color="black" />
                </div>
                {m["about.why.title"]()}
        </h2>
        <p class="text-lg font-normal">
                {@html sanitize(m["about.why.description"]())}
        </p>
        
        <!-- Feature highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                <div class="flex items-start gap-2 p-3 bg-panel-highlight rounded-lg">
                        <ZapIcon size="20" class="text-accent flex-shrink-0 mt-0.5" />
                        <div>
                                <p class="font-semibold text-sm">Fast</p>
                                <p class="text-xs text-muted">Local processing for instant results</p>
                        </div>
                </div>
                <div class="flex items-start gap-2 p-3 bg-panel-highlight rounded-lg">
                        <ShieldIcon size="20" class="text-accent flex-shrink-0 mt-0.5" />
                        <div>
                                <p class="font-semibold text-sm">Private</p>
                                <p class="text-xs text-muted">Your files never leave your device</p>
                        </div>
                </div>
                <div class="flex items-start gap-2 p-3 bg-panel-highlight rounded-lg">
                        <CpuIcon size="20" class="text-accent flex-shrink-0 mt-0.5" />
                        <div>
                                <p class="font-semibold text-sm">250+ Formats</p>
                                <p class="text-xs text-muted">Images, audio, documents & video</p>
                        </div>
                </div>
        </div>
</Panel>
