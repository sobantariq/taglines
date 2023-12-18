<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new tagline"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Tagline
        </button>
      </template>
    </AddEditNote>

    <progress
      v-if="!storeNotes.notesLoaded"
      class="progress is-large is-success"
      max="100"
    />

    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No taglines here yet...
      </div>
    </template>
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";

/*
  store
*/

const storeNotes = useStoreNotes();

/*
  notes
*/

const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};

/*
  watch characters
*/

useWatchCharacters(newNote);
</script>
<style>
.button {
  background-color: rgb(153, 89, 5) !important;
}
</style>
