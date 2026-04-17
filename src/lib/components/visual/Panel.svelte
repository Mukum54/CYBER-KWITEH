<script lang="ts">
        import type { Snippet } from "svelte";

        type Props = {
                class?: string;
                children: Snippet<[]>;
                glow?: boolean;
        };

        const { class: classList, children, glow = true }: Props = $props();
</script>

<div 
        class="bg-panel {classList} p-3 rounded-2.5xl shadow-panel relative overflow-hidden"
        class:cyanber-panel={glow}
>
        <!-- Cyber glow effect overlay -->
        {#if glow}
                <div class="absolute inset-0 pointer-events-none opacity-0 dynadark:opacity-100">
                        <div class="absolute inset-0 rounded-2.5xl" style="box-shadow: inset 0 0 20px hsla(25, 100%, 50%, 0.05), 0 0 30px hsla(25, 100%, 50%, 0.1);"></div>
                </div>
        {/if}
        {@render children?.()}
</div>

<style>
        .cyanber-panel {
                border: 1px solid hsla(25, 100%, 50%, 0.1);
        }
</style>
